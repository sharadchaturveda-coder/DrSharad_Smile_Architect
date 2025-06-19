import React from 'react';

interface PlaceholderIconProps {
  className?: string;
}

const PlaceholderIcon: React.FC<PlaceholderIconProps> = ({ className }) => (
  <svg
    className={`w-8 h-8 text-slate-400 ${className}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
  </svg>
);

export default PlaceholderIcon;
