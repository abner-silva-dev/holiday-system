import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { UserInfo } from '../features/users/types';

type Period = 'future' | 'past' | 'present';

type State = {
  userAuthenticated: null | UserInfo;
  queryUser: string;
  queryDepartment: string;
  queryEnterprise: string;
  queryHoliday: string;
  filterDepartment: string;
  filterEnterprise: string;
  period: Period;
};

type ActionsName = 'user' | 'department' | 'enterprise' | 'holiday';

type Action =
  | { type: 'user/me'; payload: UserInfo | null }
  | { type: 'user/search'; payload: string }
  | { type: 'user/period'; payload: Period }
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
      setCurrentUser: (user: UserInfo | null) => void;
      setPeriod: (period: Period) => void;
    }
  | undefined
>(undefined);

// 2) Create Initial state
const initalState: State = {
  userAuthenticated: null,
  queryUser: '',
  queryDepartment: '',
  queryEnterprise: '',
  queryHoliday: '',
  filterDepartment: '',
  filterEnterprise: '',
  period: 'present',
};

// 3) Create Reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'user/me':
      return { ...state, userAuthenticated: action.payload };
    case 'user/search':
      return { ...state, queryUser: action.payload };
    case 'user/period':
      return { ...state, period: action.payload };
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

  function setCurrentUser(user: UserInfo | null) {
    dispatch({ type: `user/me`, payload: user });
  }

  function setPeriod(period: Period) {
    dispatch({ type: `user/period`, payload: period });
  }

  return (
    <stateAppContext.Provider
      value={{
        state,
        handleSearch,
        handleFilter,
        resetGlobalState,
        setCurrentUser,
        setPeriod,
      }}
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
