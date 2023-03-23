import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getMovies } from "../api/fetchMovies";
import { reducer } from "./reducer";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialState = {
    originalMovies: [],
    filteredMovies: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getMovies().then((data) =>
      dispatch({ type: "GET_MOVIES", payload: data.results })
    );
  }, []);

  const data = { state, dispatch };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export const useCustomContext = () => useContext(MovieContext);
