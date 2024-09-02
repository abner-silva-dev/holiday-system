import React, { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  filterUser: string;
};

type Action = { type: 'user/filter'; payload: string };

// 1) create Context
const stateAppContext = createContext<
  | {
      state: State;
      dispatch?: React.Dispatch<Action>;
      handleSearch: (query: string) => void;
    }
  | undefined
>(undefined);

// 2) Create Initial state
const initalState: State = {
  filterUser: '',
};

// 3) Create Reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'user/filter':
      return { ...state, filterUser: action.payload };
  }
}

// 4) Create provider
function StateAppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  function handleSearch(query: string) {
    dispatch({ type: 'user/filter', payload: query });
  }

  return (
    <stateAppContext.Provider value={{ state, handleSearch }}>
      {children}
    </stateAppContext.Provider>
  );
}

// 5) Create hook
function useStateApp() {
  const context = useContext(stateAppContext);

  if (!context) {
    throw new Error('useStateApp must be used within a StateAppProvider');
  }

  return context;
}

export { useStateApp, StateAppProvider };
