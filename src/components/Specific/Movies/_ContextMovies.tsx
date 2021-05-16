import React, { useState } from 'react';
import { PropsMovieLight, TAnyHook } from 'src/types';

export type TsetMovies = React.Dispatch<React.SetStateAction<PropsMovieLight[]>>;
export interface PropsContext {
  movies: PropsMovieLight[] | [];
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
  }
};

export const ContextMovies = React.createContext<PropsContext>(placeholder);

export const ProviderMovies: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<PropsMovieLight[] | []>([]);
  const [popularity, setPopularity] = useState<boolean>();
  const [vote_average, setvote_average] = useState<boolean>();
  const [title, setTitle] = useState<boolean>();
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
        }
      }}
    >
      {children}
    </ContextMovies.Provider>
  );
};
