import { twMerge } from 'tailwind-merge';
import { ResultsDisplay } from './ResultsDisplay';
import { SearchBar } from './SearchBar';

// main purpose is to structure all components at a higher level

const anatomical_structure_styles = {
  parent: twMerge('h-full grid grid-cols-12 grid-rows-6 bg-gray-100'),
  background: twMerge(
    'col-span-10 col-start-2 row-start-1 border-2 border-slate-900 rounded row-span-6 bg-slate-700 z-0'
  ),
  search_bar: twMerge('col-start-2 row-span-full row-start-1 col-span-2 z-10'),
  results_display: twMerge(
    'col-start-4 row-start-1 col-span-8 row-span-full z-10'
  ),
} as const;

const Structure = () => {
  const { parent, background, search_bar, results_display } =
    anatomical_structure_styles;

  return (
    <div id="App-Structure" aria-label="App-Structure" className={parent}>
      <span
        id="App-Structure-Background"
        aria-label="App-Structure-Background"
        className={background}
      />
      <SearchBar className={search_bar} />
      <ResultsDisplay className={results_display} />
    </div>
  );
};

export { Structure };
