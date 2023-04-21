import React, { FC, useState } from 'react';
import { Table, Header } from 'semantic-ui-react';
import useImgConfig from 'src/store/data/movies/useImgConfig';

import { PropsImgConfig, PropsMovieLight, TAnyHook } from 'src/types';
import getCustomFullPosterPath from 'src/util/getCustomFullPosterPath';
import {
  axGetMovieCredits,
  PropsMovieCredit,
  MovieCredits,
  PropsPerson,
  reduceCastByPopularity
} from '../../LoadMovieCredits';
import { axGetMovieDetail, MovieDetail, PropsMovieDetail } from '../../LoadMovieDetail';
import { axGetMoviePersonImg } from '../../LoadMoviePersonImage';

import { ContextMovies } from '../_ContextMovies';

import ButtonLoadTrailer from './ButtonLoadTrailer';

type TpopulatePersonImg = (props: {
  img_config: PropsImgConfig | undefined;
  castPopular: PropsMovieCredit['cast'];
  persons: Tpersons;
  setPersons: any;
}) => void;

const populatePersonImgFromCast: TpopulatePersonImg = ({
  img_config,
  castPopular,
  persons,
  setPersons
}) => {
  if (img_config) {
    castPopular.forEach(async (person_item, ind) => {
      const { id: person_id, popularity, name } = person_item;
      if (!persons[person_id]) {
        const personImage = await axGetMoviePersonImg(Number(person_id));

        const len = personImage.data.profiles.length;
        let file_path;
        if (len) {
          const rand = Math.floor(Math.random() * (len - 1));
          file_path = personImage.data.profiles[rand]?.file_path || undefined; // random image
        }

        const personDetail: PropsPerson = {
          id: person_id,
          name,
          popularity,
          file_path
        };
        if (file_path) {
          personDetail.src = getCustomFullPosterPath(file_path, img_config);
        }

        setPersons((prev: PropsPerson) => ({
          ...prev,
          [person_id]: personDetail
        }));
      }
    });
  }
};

type TmovieDetails = { [key: string]: PropsMovieDetail };
type TmovieCredits = { [key: string]: PropsMovieCredit };
export type Tpersons = { [key: string]: PropsPerson };

const maxWidth = '800px';

const TBody: FC = () => {
  const [movieDetailToggle, setMovieDetailToggle] = useState<{ [key: string]: boolean }>({});

  const [movieDetails, setMovieDetails] = useState<TmovieDetails>({});
  const [movieCredits, setMovieCredits] = useState<TmovieCredits>({});

  const [persons, setPersons] = useState<Tpersons>({});
  const { img_config, acGetImgConfig } = useImgConfig();

  const { movies, maxPerPage, page } = React.useContext(ContextMovies);
  const end = 1 + maxPerPage * page;
  const start = end - maxPerPage;
  const handleClickMovie = async (evt: React.MouseEvent<HTMLElement>) => {
    if ((evt.target as HTMLElement).tagName !== 'BUTTON') {
      const id = (evt.currentTarget as HTMLElement).getAttribute('data-movie-id');

      setMovieDetailToggle((prev) => ({ ...prev, [`${id}`]: !prev[`${id}`] }));

      if (!movieDetails[`${id}`]) {
        const detail = await axGetMovieDetail(Number(id));
        if (detail) {
          setMovieDetails((prev) => ({ ...prev, [`${id}`]: detail.data }));
        }
      }
      if (!movieCredits[`${id}`]) {
        const credits = await axGetMovieCredits(Number(id));

        if (credits) {
          const { data } = credits;
          const { cast } = data;
          const castPopular = reduceCastByPopularity(cast);
          setMovieCredits((prev) => ({ ...prev, [`${id}`]: { ...data, castPopular } }));
          populatePersonImgFromCast({ img_config, castPopular, persons, setPersons });
        }
      }
    }
  };

  return (
    <tbody>
      {movies.slice(start, end).map((item: PropsMovieLight) => (
        <tr data-movie-id={item.id} key={`movie-id-${item.id}`} onClick={handleClickMovie}>
          <Table.Cell verticalAlign="top">
            <img src={item.custom_full_poster_path as string} alt={item.title} />
          </Table.Cell>
          <Table.Cell verticalAlign="top" style={{ width: maxWidth }} selectable>
            <Header as="h2">{item.title}</Header>
            <p>{item.overview}</p>
            {movieCredits[item.id] && movieDetailToggle[item.id] && (
              <MovieCredits
                movieCredit={movieCredits[item.id]}
                persons={persons}
                img_config={img_config}
                maxWidth={maxWidth}
              />
            )}
            {movieDetails[item.id] && movieDetailToggle[item.id] && (
              <MovieDetail movieDetail={movieDetails[item.id]} />
            )}

            <ButtonLoadTrailer id={item.id} />
          </Table.Cell>
          <Table.Cell>{new Date(item.release_date).toLocaleDateString()}</Table.Cell>
          <Table.Cell>{item.popularity}</Table.Cell>
          <Table.Cell>{item.vote_average}</Table.Cell>
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
