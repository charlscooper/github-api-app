import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import * as zod from 'zod';
import { UseAppContext } from '../data/context/AppContext';
import {
  RESET_FILTERS,
  UPDATE_REPO_NAME,
  UPDATE_REPO_OWNER,
} from '../data/context/AppContext/actions';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

const anatomical_structure_styles = {
  parent: twMerge('container border-r-2 border-slate-500'),
} as const;

const form_schema = zod.object({
  repo_owner: zod
    .string()
    .min(3, {
      message: 'Must be at least 3 characters.',
    })
    .max(25, {
      message: 'Cannot be more than 25 characters.',
    }),
  repo_name: zod
    .string()
    .min(5, {
      message: 'Must be at least 5 characters.',
    })
    .max(50, {
      message: 'Cannot be more than 50 characters.',
    }),
});

const SearchBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className, ref }) => {
  const { parent } = anatomical_structure_styles;
  const { dispatch, state } = UseAppContext();

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
    dispatch({
      type: UPDATE_REPO_NAME,
      payload: data.repo_name,
    });
  };

  const on_reset = () => {
    form.reset();
    dispatch({
      type: RESET_FILTERS,
    });
    console.log('reset: ', state);
  };

  return (
    <div
      id="Search-Bar"
      ref={ref}
      aria-label="Search-Bar"
      className={twMerge(parent, className, 'p-2')}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(on_submit)}
          onReset={on_reset}
          className="grid grid-rows-[auto_auto_0.5fr] gap-4 h-full"
        >
          <FormField
            control={form.control}
            name="repo_owner"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-gray-100">Repo Owner</FormLabel>
                <FormControl>
                  <Input placeholder="name of the repositry owner" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repo_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-100">Repo Name</FormLabel>
                <FormControl>
                  <Input placeholder="name of the repositry" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-center items-center py-2 gap-2 text-gray-100">
            <div className="flex flex-row w-full gap-2">
              <Button className="w-full" disabled>
                Filters
              </Button>
              <Button className="w-8" type="reset" onClick={on_reset}>
                ❌
              </Button>
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
});

export { SearchBar };
