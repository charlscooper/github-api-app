export const GET_DEFAULT_STATE = 'GET_DEFAULT_STATE';
export const RESET_FILTERS = 'RESET_FILTERS';
export const UPDATE_REPO_OWNER = 'UPDATE_REPO_OWNER';
export const UPDATE_REPO_NAME = 'UPDATE_REPO_NAME';

const GetDefaultState = () =>
  ({
    type: GET_DEFAULT_STATE,
  } as const);

const ResetFilters = () =>
  ({
    type: RESET_FILTERS,
  } as const);

const UpdateRepoOwner = (payload: string) =>
  ({
    type: UPDATE_REPO_OWNER,
    payload,
  } as const);

const UpdateRepoName = (payload: string) =>
  ({
    type: UPDATE_REPO_NAME,
    payload,
  } as const);

type ContextAction =
  | ReturnType<typeof ResetFilters>
  | ReturnType<typeof GetDefaultState>
  | ReturnType<typeof UpdateRepoOwner>
  | ReturnType<typeof UpdateRepoName>;

export {
  type ContextAction,
  GetDefaultState,
  ResetFilters,
  UpdateRepoOwner,
  UpdateRepoName,
};
