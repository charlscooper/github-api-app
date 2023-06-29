import React from 'react';
import { ContextAction } from './actions';
import { AppState, defaultState } from './data';
import Reducer from './reducer';

type AppContextType = {
  state: AppState;
  dispatch: (action: ContextAction) => void;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(Reducer, defaultState());
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const UseAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};

export { AppProvider, UseAppContext };
