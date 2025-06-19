import React from 'react';
import { cn } from '@/lib/utils';

interface SubtlePatternProps {
  className?: string;
  patternId?: string;
  lineColor?: string; // e.g., 'rgba(255, 255, 255, 0.05)'
  lineWidth?: number;
  patternSize?: number; // Controls density, smaller is denser
}

const SubtlePattern: React.FC<SubtlePatternProps> = ({
  className,
  patternId = 'subtleDiagonalLines',
  lineColor = 'rgba(100, 116, 139, 0.2)', // slate-500 with opacity
  lineWidth = 0.5,
  patternSize = 10,
}) => {
  return (
    <svg
      className={cn('absolute inset-0 w-full h-full opacity-50', className)}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width={patternSize}
          height={patternSize}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2={patternSize}
            stroke={lineColor}
            strokeWidth={lineWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export default SubtlePattern;
