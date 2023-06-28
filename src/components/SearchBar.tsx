import React from 'react';
import { twMerge } from 'tailwind-merge';

const anatomical_structure_styles = {
  parent: twMerge('container border-b border-slate-300'),
} as const;

const SearchBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className }) => {
  const { parent } = anatomical_structure_styles;
  return (
    <div
      id="Search-Bar"
      aria-label="Search-Bar"
      className={twMerge(parent, className)}
    ></div>
  );
});

export { SearchBar };
