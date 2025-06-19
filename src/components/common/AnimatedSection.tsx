'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation, Variants, HTMLMotionProps } from 'framer-motion'; // Corrected import
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

// Ensure T is a key for an HTML element that framer-motion supports
type MotionHTMLTag = Extract<keyof typeof motion, keyof HTMLElementTagNameMap>;

// Define the base props for our AnimatedSection, excluding motion-specific ones we handle or pass via ...rest
interface AnimatedSectionBaseProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  yOffset?: number;
  duration?: number;
}

// Props for the component: our base props + a 'tag' prop + remaining HTMLMotionProps for that tag
type AnimatedSectionProps<T extends MotionHTMLTag = 'section'> =
  AnimatedSectionBaseProps &
  { tag?: T } &
  // Omit props we define ourselves from HTMLMotionProps<T> to avoid conflicts when spreading ...rest
  Omit<HTMLMotionProps<T>, keyof AnimatedSectionBaseProps | 'tag'>;

const AnimatedSection = <T extends MotionHTMLTag = 'section'>({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.2,
  yOffset = 20,
  duration = 0.5,
  tag = 'section' as T, // Default tag is 'section'
  ...rest // These are the remaining HTMLMotionProps<T>
}: AnimatedSectionProps<T>) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: 'easeOut' },
    },
  };

  // Let TypeScript infer the component type from motion[tag]
  // motion[tag] should be a ForwardRefComponent
  const MotionComponentSource = motion[tag];

  // Fallback for safety, though MotionHTMLTag should ensure tag is valid
  if (!MotionComponentSource) {
    console.warn(`AnimatedSection: Invalid tag "${tag}" provided. Defaulting to 'div'.`);
    const FallbackComponent = motion.div;
    return (
      <FallbackComponent
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className={cn(className)}
        {...(rest as HTMLMotionProps<'div'>)} // Cast rest for the fallback
      >
        {children}
      </FallbackComponent>
    );
  }

  // Cast to 'any' to bypass complex union type error during build
  const MotionComponent = MotionComponentSource as any;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(className)}
      {...rest} // Spread the correctly typed remaining props
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
