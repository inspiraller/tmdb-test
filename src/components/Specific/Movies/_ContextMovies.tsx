import React, { useState } from 'react';
import { PropsMovieLight, TAnyHook } from 'src/types';

export type TsetMovies = React.Dispatch<React.SetStateAction<PropsMovieLight[]>>;

export interface PropsContext {
  movies: PropsMovieLight[] | never[];
  setMovies: TsetMovies;
  sort: {
    title: {
      asc?: boolean;
      set: TAnyHook;
    };
    popularity: {
      asc?: boolean;
      set: TAnyHook;
    };
    vote_average: {
      asc?: boolean;
      set: TAnyHook;
    };
  };
  page: number;
  setPage: TAnyHook;
  maxPerPage: number;
  setMaxPerPage: TAnyHook;
}
const placeholder = {
  movies: [],
  setMovies: () => {},

  // TODO: sort maybe better localised to Thead
  sort: {
    title: {
      set: () => {}
    },
    popularity: {
      set: () => {}
    },
    vote_average: {
      set: () => {}
    }
  },
  page: 1,
  setPage: () => {},
  maxPerPage: 20,
  setMaxPerPage: () => {}
};

export const ContextMovies = React.createContext<PropsContext>(placeholder);

export const ProviderMovies: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<PropsMovieLight[] | never[]>([]);
  const [popularity, setPopularity] = useState<boolean>(false);
  const [vote_average, setvote_average] = useState<boolean>(false);
  const [title, setTitle] = useState<boolean>(false);
  const [page, setPage] = useState<number>(placeholder.page);
  const [maxPerPage, setMaxPerPage] = useState<number>(placeholder.maxPerPage);
  return (
    <ContextMovies.Provider
      value={{
        movies,
        setMovies,
        sort: {
          title: {
            asc: title,
            set: setTitle
          },
          popularity: {
            asc: popularity,
            set: setPopularity
          },
          vote_average: {
            asc: vote_average,
            set: setvote_average
          }
        },
        page,
        setPage,
        maxPerPage,
        setMaxPerPage
      }}
    >
      {children}
    </ContextMovies.Provider>
  );
};
