import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "src/store/config/rootReducer";
import at from "src/store/data/movies/actionTypes";
import axios, { AxiosResponse } from "axios";
import { PropsMovieGenre } from "src/types";

const api_key = process.env.api_key;

type TaxGetGenres = () => Promise<AxiosResponse<{ genres: PropsMovieGenre[] }>>;
const axGetGenres: TaxGetGenres = () => {
  return axios({
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`,
    method: "GET",
  });
};

const useMovieGenres = () => {
  const genres = useSelector((state: ApplicationState) => state.movies?.genres);
  const dispatch = useDispatch();
  const acGetGenres = (payload: PropsMovieGenre[]) =>
    dispatch({
      type: at.GET_MOVIE_GENRES,
      payload,
    });

  return { genres, acGetGenres };
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
