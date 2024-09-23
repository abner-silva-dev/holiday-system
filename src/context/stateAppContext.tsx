import React, { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  queryUser: string;
  queryDepartment: string;
  queryEnterprise: string;
  queryHoliday: string;
  filterDepartment: string;
  filterEnterprise: string;
};

type ActionsName = 'user' | 'department' | 'enterprise' | 'holiday';

type Action =
  | { type: 'user/search'; payload: string }
  | { type: 'department/search'; payload: string }
  | { type: 'enterprise/search'; payload: string }
  | { type: 'holiday/search'; payload: string }
  | { type: 'department/filter'; payload: string }
  | { type: 'enterprise/filter'; payload: string };

// 1) create Context
const stateAppContext = createContext<
  | {
      state: State;
      dispatch?: React.Dispatch<Action>;
      handleSearch: (type: ActionsName, query: string) => void;
      handleFilter: (type: 'department' | 'enterprise', filter: string) => void;
      resetGlobalState: () => void;
    }
  | undefined
>(undefined);

// 2) Create Initial state
const initalState: State = {
  queryUser: '',
  queryDepartment: '',
  queryEnterprise: '',
  queryHoliday: '',
  filterDepartment: '',
  filterEnterprise: '',
};

// 3) Create Reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'user/search':
      return { ...state, queryUser: action.payload };
    case 'department/search':
      return { ...state, queryDepartment: action.payload };
    case 'enterprise/search':
      return { ...state, queryEnterprise: action.payload };
    case 'holiday/search':
      return { ...state, queryHoliday: action.payload };
    case 'department/filter':
      return { ...state, filterDepartment: action.payload };
    case 'enterprise/filter':
      return { ...state, filterEnterprise: action.payload };
  }
}

// 4) Create provider
function StateAppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  function handleSearch(type: ActionsName, query: string) {
    dispatch({ type: `${type}/search`, payload: query });
  }

  function handleFilter(type: 'department' | 'enterprise', filter: string) {
    dispatch({ type: `${type}/filter`, payload: filter });
  }

  function resetGlobalState() {
    handleSearch('department', '');
    handleSearch('enterprise', '');
    handleSearch('user', '');
    handleSearch('holiday', '');
  }

  return (
    <stateAppContext.Provider
      value={{ state, handleSearch, handleFilter, resetGlobalState }}
    >
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
