import { createContext, useReducer } from "react";

export const SearchContext = createContext();

export const searchReducer = (state, action) => {
  return {
    ...state,
    search: action.search !== undefined ? action.search : state.search,
    display: action.display !== undefined ? action.display : state.display,
    category: action.category !== undefined ? action.category : state.category,
    date: action.date !== undefined ? action.date : state.date,
    place: action.place !== undefined ? action.place : state.place,

  };
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    search: null,
    category: null,
    date: null,
    place: null,
    display: null,
  });

  console.log("Search state", state);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
