import { GitHubAPIResponse } from '@api/GithubAPIResponse';
import { get_repo_data } from '@api/get-repo-data';
import { UseAppContext } from '@data/context/AppContext';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

const anatomical_structure_styles = {
  parent: twMerge(
    'container text-gray-100 grid gap-4 grid-cols-3 grid-rows-2 w-full py-2 max-h-1/2 self-center'
  ),
} as const;

const ResultsDisplay = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className }) => {
  const { parent } = anatomical_structure_styles;
  const { state } = UseAppContext();
  const [results, setResults] = React.useState<GitHubAPIResponse | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (state.repo_owner === '' || state.repo_name === '') {
      setResults(undefined);
      return;
    }
    (async () => {
      const data = await get_repo_data({
        owner: state.repo_owner,
        repo_name: state.repo_name,
      });
      if (data !== undefined) setResults(data);
    })();
  }, [state]);

  const data_cards = [
    {
      title: 'Name',
      desc: 'The name of the repository',
      data: results?.name,
    },
    {
      title: 'Owner',
      desc: 'The owner of the repository',
      data: results?.owner.login,
    },
    {
      title: 'Forks',
      desc: 'The number of forks the repository has',
      data: results?.forks_count,
    },
    {
      title: 'Stars',
      desc: 'The number of stars the repository has',
      data: results?.stargazers_count,
    },
    {
      title: 'Watchers',
      desc: 'The number of watchers the repository has',
      data: results?.watchers_count,
    },
  ];

  return (
    <div
      id="Results-Display"
      aria-label="Results-Display"
      className={twMerge(parent, className)}
    >
      {data_cards.map((card) => {
        if (card.data === undefined) return null;

        return (
          <Card
            className="bg-slate-800 border-slate-900 border-2 text-gray-100 m-2"
            key={card.title}
            id={card.title}
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription className="text-gray-400">
                {card.desc}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{card.data}</p>
            </CardContent>
          </Card>
        );
      })}
      {!results || !state.repo_name || !state.repo_owner ? (
        <Card className="col-span-full row-span-full bg-transparent flex items-center justify-center border-slate-900 border-2 text-gray-100">
          <h2 className="text-7xl">No results</h2>
        </Card>
      ) : null}
    </div>
  );
});

export { ResultsDisplay };
