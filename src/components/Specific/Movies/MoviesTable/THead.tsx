import React, { FC, useCallback } from 'react';
import { PropsMovieLight } from 'src/types';
import { Table } from 'semantic-ui-react';
import { ContextMovies } from '../_ContextMovies';
import sortKey from './sortTh';

const capitalise = (str: string) => `${str.substring(0, 1).toUpperCase()}${str.substr(1)}`;

const headings = {
  title: 'Title',
  popularity: 'Propularity',
  vote_average: 'Vote Average',
  custom_full_poster_path: 'Poster',
  genre_ids: 'Genres'
};

const getTh = (key: keyof typeof headings): string => {
  return headings[key];
};

const THead: FC = () => {
  // TODO: sort maybe better localised to Thead
  const { movies, setMovies, sort } = React.useContext(ContextMovies);
  type Tkey = keyof typeof sort;
  const movie0 = movies[0];

  const resetTogglers = useCallback(() => {
    Object.keys(sort).forEach((sortTogglerName) => {
      sort[sortTogglerName as Tkey].set(undefined);
    });
  }, []);

  const handleToggle = (keyName: 'title' | 'popularity' | 'vote_average') => {
    const sortType = keyName !== 'title' ? 'number' : 'string';
    resetTogglers();
    const toggleItem = sort[keyName];
    toggleItem.set(!toggleItem.asc);
    setMovies(sortKey<PropsMovieLight>(movies, keyName, toggleItem.asc, sortType));
  };

  const getSorted = (key: string) => {
    const asc = sort[key as keyof typeof sort]?.asc;
    const direction = asc ? 'ascending' : 'descending';
    return asc !== undefined ? direction : undefined;
  };

  return movies.length ? (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Poster</Table.HeaderCell>
        <Table.HeaderCell sorted={getSorted('title')} onClick={() => handleToggle('title')}>
          Title
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={getSorted('popularity')}
          onClick={() => handleToggle('popularity')}
        >
          Popularity
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={getSorted('vote_average')}
          onClick={() => handleToggle('vote_average')}
        >
          Vote Average
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  ) : null;
};

export default THead;
