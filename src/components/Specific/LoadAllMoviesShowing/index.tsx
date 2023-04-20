import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { PropsImgConfig, PropsMovie, PropsMovieLight } from 'src/types';

import { ApplicationState } from 'src/store/config/rootReducer';
import reduceToMoviesLight from 'src/util/reduceToMoviesLight';
import useMovieList from 'src/store/data/movies/useMovieList';
import { ENDPOINT_GET_MOVIES_SHOWING, ENDPOINT_QS } from 'src/endpoints/movie_list';

export type PropsAxiosGetMoviesShowing = AxiosResponse<{
  page: number;
  results: PropsMovie[];
  total_pages: number;
}>;

type TaxGetAllShowing = (pg?: number) => Promise<PropsAxiosGetMoviesShowing>;
const axGetAllShowing: TaxGetAllShowing = (pg = 1) => {
  return axios({
    url: `${ENDPOINT_GET_MOVIES_SHOWING}${ENDPOINT_QS}&page=${pg}`,
    method: 'GET'
  });
};

const axGetTotalShowing = async (
  acPopulateMoviesShowing: (movie_list: PropsMovieLight[]) => void,
  img_config: PropsImgConfig
) => {
  const resp = await axGetAllShowing(1);

  // debug msw
  // console.log('AFTER LOADED - resp.data = ', resp.data);

  if (resp) {
    const { total_pages, results: resultsPg1 } = resp.data;

    const reducedMovieListPg1 = reduceToMoviesLight(resultsPg1, img_config);
    const promises: Promise<PropsAxiosGetMoviesShowing>[] = [];

    if (total_pages > 1) {
      Array(total_pages)
        .fill(undefined)
        .forEach((_, index) => {
          promises.push(axGetAllShowing(index + 2));
        });
    }
    Promise.all(promises).then((arrValues) => {
      const movie_list = arrValues.reduce((accum, cur) => {
        return [...accum, ...reduceToMoviesLight(cur.data.results, img_config as PropsImgConfig)];
      }, reducedMovieListPg1);
      //                                                      override if previously exist
      //                                                      ||
      //                                                      \/
      const unique = [...new Map(movie_list.map((item) => [item.id, item])).values()];
      acPopulateMoviesShowing(unique);
    });
  }
};

const LoadAllMoviesShowing: FC = ({ children }) => {
  const { movie_list, acPopulateMoviesShowing } = useMovieList();
  const img_config = useSelector((state: ApplicationState) => state.movies?.img_config);

  useEffect(() => {
    if ((!movie_list || !movie_list.length) && img_config) {
      axGetTotalShowing(acPopulateMoviesShowing, img_config);
    }
  }, [img_config]);
  return <>{children}</>;
};

export default LoadAllMoviesShowing;
