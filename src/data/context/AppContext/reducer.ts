import {
  ContextAction,
  GET_DEFAULT_STATE,
  RESET_FILTERS,
  UPDATE_REPO_NAME,
  UPDATE_REPO_OWNER,
  UpdateRepoName,
  UpdateRepoOwner,
} from './actions';
import { defaultState, type AppState } from './data';

type AppStateUpdateHandler<T> = (
  state: AppState,
  // The payload is essentially the argument of whatever action is passed in T
  payload: T extends (payload: infer U) => unknown ? U : never
) => AppState;

const Reducer = (state = defaultState(), action: ContextAction): AppState => {
  console.log('action type: ', action.type);
  switch (action.type) {
    case UPDATE_REPO_OWNER:
      return handleRepoOwnerUpdate(state, action.payload);
    case UPDATE_REPO_NAME:
      return handleRepoNameUpdate(state, action.payload);
    case GET_DEFAULT_STATE:
    case RESET_FILTERS:
      return { ...defaultState() };

    default:
      return state;
  }
};

const handleRepoOwnerUpdate: AppStateUpdateHandler<typeof UpdateRepoOwner> = (
  state,
  payload
) => {
  return {
    ...state,
    repo_owner: payload,
  };
};

const handleRepoNameUpdate: AppStateUpdateHandler<typeof UpdateRepoName> = (
  state,
  payload
) => {
  return {
    ...state,
    repo_name: payload,
  };
};

export default Reducer;
