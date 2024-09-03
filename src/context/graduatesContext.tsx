import { ReactNode, createContext, useContext, useReducer } from 'react';
type State = {
  filterGraduate: string;
  filterDegree: string;
  filterStatus: string;
};                                                              
type Action =
  | { type: 'graduates/filter'; payload: string }
  | { type: 'graduates/filter/degree'; payload: string } 
  | { type: 'graduates/filter/status'; payload: string };

const graduatesContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

const initialState: State = {
  filterGraduate: '',
  filterDegree: 'all',
  filterStatus: 'all',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'graduates/filter':
      return { ...state, filterGraduate: action.payload };
    case 'graduates/filter/degree':
      return { ...state, filterDegree: action.payload };
    case 'graduates/filter/status':
      return { ...state, filterStatus: action.payload };
    default:
      throw new Error('Action unknown');
  }
}

function GraduatesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <graduatesContext.Provider value={{ state, dispatch }}>
      {children}
    </graduatesContext.Provider>
  );
}

function useGraduates() {
  const context = useContext(graduatesContext);
  if (!context) {
    throw new Error('useGraduates must be used within a GraduatesProvider');
  }

  return context;
}

export { GraduatesProvider, useGraduates };

// import { createContext, useContext, useReducer } from 'react';

// import { API_DEGREE_TITLES_GENERAL } from '../config';

// const graduatesContext = createContext();

// const initialState = {
//   // status: "loading",
//   filter: [],
//   graduates: [],
//   graduatesToModify: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'dataReceived':
//       return { ...state, graduates: action.payload, filter: action.payload };
//     case 'newGraduate':
//       return {
//         ...state,
//         graduates: [action.payload, ...state.graduates],
//         filter: [action.payload, ...state.graduates],
//       };
//     case 'filterGraduates':
//       console.log(
//         `career: ${action.payload.career}`,
//         `status: ${action.payload.status}`
//       );

//       if (action.payload.career === 'all' && action.payload.status === 'all')
//         return { ...state, filter: state.graduates };

//       return {
//         ...state,
//         filter: state.graduates
//           .filter((graduate) => {
//             if (action.payload.career === 'all') return true;
//             return graduate.degree._id === action.payload.career;
//           })
//           .filter((graduate) => {
//             if (action.payload.status === 'all') return true;
//             return graduate.status._id === action.payload.status;
//           }),
//       };
//     case 'addgraduateToModify':
//       return {
//         ...state,
//         graduatesToModify: [...state.graduatesToModify, action.payload],
//       };
//     case 'deletegraduateToModify':
//       return {
//         ...state,
//         graduatesToModify: state.graduatesToModify.filter(
//           (st) => st.id !== action.payload
//         ),
//       };
//     case 'deletegraduates':
//       return {
//         ...state,
//         graduates: state.graduates.filter((graduate) =>
//           state.graduatesToModify.includes(graduate)
//         ),
//       };

//     default:
//       throw new Error('Action unknow');
//   }
// }

// function GraduatesProvider({ children }) {
//   const [{ graduates, filter }, dispatch] = useReducer(reducer, initialState);

//   const creategraduate = async (graduate) => {
//     try {
//       const res = await fetch(`${API_DEGREE_TITLES_GENERAL}/users`, {
//         method: 'POST',
//         body: JSON.stringify(graduate),
//         headers: {
//           'Content-type': 'application/json',
//         },
//       });

//       const data = await res.json();

//       console.log(data);
//       dispatch({ type: 'newgraduate', payload: data.data.data });
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   const getGraduates = (graduate) => {
//     dispatch({ type: 'dataReceived', payload: graduate });
//   };

//   return (
//     <graduatesContext.Provider
//       value={{ graduates, filter, creategraduate, getGraduates, dispatch }}
//     >
//       {children},
//     </graduatesContext.Provider>
//   );
// }

// function usegraduates() {
//   const context = useContext(graduatesContext);

//   return { ...context };
// }

// export { GraduatesProvider, usegraduates };
