import { createContext, useReducer } from "react";

export const SearchContext = createContext();

export const searchReducer = (state, action) => {
  return { ...state, search: action.search, display: action.display };
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    search: null,
    display: null
  });

  console.log("Search state", state);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
