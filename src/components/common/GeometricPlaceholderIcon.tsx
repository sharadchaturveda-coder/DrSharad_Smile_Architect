import React from 'react';
import { cn } from '@/lib/utils';

interface GeometricPlaceholderIconProps extends React.SVGProps<SVGSVGElement> {
  shape?: 'hexagon' | 'diamond';
  glow?: boolean;
}

const GeometricPlaceholderIcon: React.FC<GeometricPlaceholderIconProps> = ({
  className,
  shape = 'hexagon',
  glow = true,
  ...props
}) => {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor', // Will be text-accent from parent
    strokeWidth: 1.5,
    viewBox: '0 0 24 24',
    ...props,
  };

  const glowFilter = glow ? 'url(#softGlow)' : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-12 h-12 text-accent', className)} // Default size, can be overridden
      {...commonProps}
      filter={glowFilter}
    >
      {glow && (
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      {shape === 'hexagon' && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.792V11.208L12.792 3H11.208L3 11.208V12.792L11.208 21H12.792L21 12.792Z"
        />
      )}
      {shape === 'diamond' && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.5L21.5 12L12 21.5L2.5 12L12 2.5Z"
        />
      )}
    </svg>
  );
};

export default GeometricPlaceholderIcon;
