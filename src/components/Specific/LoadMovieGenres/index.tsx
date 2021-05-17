import React, { FC, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { PropsMovieGenre } from 'src/types';
import useMovieGenres from 'src/store/data/movies/useMovieGenres';

/* eslint-disable prefer-destructuring */
const api_key = process.env.api_key;

type TaxGetGenres = () => Promise<AxiosResponse<{ genres: PropsMovieGenre[] }>>;
const axGetGenres: TaxGetGenres = () => {
  return axios({
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`,
    method: 'GET'
  });
};

const LoadMovieGenres: FC = ({ children }) => {
  const { genres, acGetGenres } = useMovieGenres();
  useEffect(() => {
    if (!genres) {
      axGetGenres().then((res) => {
        const { genres: resultGenres } = res.data;
        acGetGenres(resultGenres);
      });
    }
  }, [genres]);

  return <>{children}</>;
};

export default LoadMovieGenres;
