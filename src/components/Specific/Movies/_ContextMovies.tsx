import React, { useState, useMemo, Dispatch, SetStateAction, useEffect } from 'react';
import useMovieList from 'src/store/data/movies/useMovieList';
import { PropsMovieLight, TAnyHook } from 'src/types';
import { TarrSortTypes, sortTable } from './SearchMovies/sort';

export type TsetMovies = React.Dispatch<React.SetStateAction<PropsMovieLight[]>>;

export interface PropsContext {
  movies: PropsMovieLight[]; // | never[];
  setMovies: TsetMovies;
  arrSortTypes: TarrSortTypes;
  setArrSortTypes: Dispatch<SetStateAction<TarrSortTypes>>;
  page: number;
  setPage: TAnyHook;
  maxPerPage: number;
  setMaxPerPage: TAnyHook;
}
const placeholder = {
  movies: [],
  setMovies: () => {},
  arrSortTypes: [],
  setArrSortTypes: () => {},
  page: 1,
  setPage: () => {},
  maxPerPage: 20,
  setMaxPerPage: () => {}
};

export const ContextMovies = React.createContext<PropsContext>(placeholder);

export const ProviderMovies: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<PropsMovieLight[] | never[]>([]);
  const [page, setPage] = useState<number>(placeholder.page);
  const [maxPerPage, setMaxPerPage] = useState<number>(placeholder.maxPerPage);
  const [arrSortTypes, setArrSortTypes] = useState<TarrSortTypes>([]);

  const { movie_list } = useMovieList();

  useEffect(() => {
    if (movie_list?.length) {
      setMovies(movie_list);
    }
  }, [movie_list]);

  useEffect(() => {
    const moviesUpdated = sortTable({ arrSortTypes, tableData: movies });
    setMovies(moviesUpdated);
  }, [arrSortTypes]);

  

  const value = useMemo<PropsContext>(
    () => ({
      movies,
      setMovies,
      arrSortTypes,
      setArrSortTypes,
      page,
      setPage,
      maxPerPage,
      setMaxPerPage
    }),
    [movies, page, maxPerPage, arrSortTypes]
  );
  return <ContextMovies.Provider value={value}>{children}</ContextMovies.Provider>;
};
