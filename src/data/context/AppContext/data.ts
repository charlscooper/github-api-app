type AppState = {
    repo_owner: string;
    repo_name: string;
};


const defaultState = (): AppState =>
  ({
    repo_owner: '',
    repo_name: '',
  } as const);

export {type AppState, defaultState}
