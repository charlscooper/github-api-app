import React from 'react';
import { twMerge } from 'tailwind-merge';

const anatomical_structure_styles = {
  parent: twMerge('container'),
} as const;

const ResultsDisplay = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className }) => {
  const { parent } = anatomical_structure_styles;
  return (
    <div
      id="Results-Display"
      aria-label="Results-Display"
      className={twMerge(parent, className)}
    ></div>
  );
});

export { ResultsDisplay };
