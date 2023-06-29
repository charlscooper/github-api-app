import React from 'react';
import { twMerge } from 'tailwind-merge';
import { UseAppContext } from '../data/context/AppContext';
import { AppState } from '../data/context/AppContext/data';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { UPDATE_REPO_OWNER } from '../data/context/AppContext/actions';
import { Input } from './ui/input';
import { Button } from './ui/button';

const anatomical_structure_styles = {
  parent: twMerge('container border-b border-slate-300'),
} as const;

const form_schema = zod.object({
  repo_owner: zod.string().min(2).max(50),
  repo_name: zod.string().min(2).max(50),
});

const SearchBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className }) => {
  const { parent } = anatomical_structure_styles;
  const { dispatch, state } = UseAppContext();
  const { repo_owner, repo_name }: AppState = state;
  const form = useForm<zod.infer<typeof form_schema>>({
    resolver: zodResolver(form_schema),
    defaultValues: {
      ...state,
    },
  });

  const on_submit = (data: zod.infer<typeof form_schema>) => {
    dispatch({
      type: UPDATE_REPO_OWNER,
      payload: data.repo_owner,
    });
  };

  return (
    <div
      id="Search-Bar"
      aria-label="Search-Bar"
      className={twMerge(parent, className)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(on_submit)} className="space-y-8">
          <FormField
            control={form.control}
            name="repo_owner"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="name of the repositry owner" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
});

export { SearchBar };
