import React, { FC, useCallback } from 'react';
import { Table } from 'semantic-ui-react';

import { TTableHeading, TsortType, updateSortTypes } from 'src/util/sort';
import { tableHeadings } from 'src/types';
import sortKey from './sortTh';
import { ContextMovies } from '../_ContextMovies';

const capitalise = (str: string) => `${str.substring(0, 1).toUpperCase()}${str.substr(1)}`;

const getTh = (key: keyof typeof tableHeadings): string => {
  return tableHeadings[key];
};

const THead: FC = () => {
  // TODO: sort maybe better localised to Thead
  const { movies, setMovies, arrSortTypes, setArrSortTypes } = React.useContext(ContextMovies);
  // type Tkey = keyof typeof sort;

  // const resetTogglers = useCallback(() => {
  //   Object.keys(sort).forEach((sortTogglerName) => {
  //     sort[sortTogglerName as Tkey].set(undefined);
  //   });
  // }, []);

  const handleToggle = (evt: React.KeyboardEvent, keyName: TTableHeading) => {
    const isShift = evt.shiftKey;

    let sortType: TsortType = 'number';
    if (keyName === 'title' || keyName === 'release_date') {
      sortType = 'string';
    }

    const arrSortTypesUpdated = updateSortTypes({
      col: keyName,
      arrSortTypes,
      shiftKey: isShift,
      sortType
    });
    setArrSortTypes(arrSortTypesUpdated);
  };

  const getSorted = (key: string) => {
    const objSort = arrSortTypes.find((item) => item.col === key);
    const dir = objSort?.dir;
    if (dir) {
      return dir === 'asc' ? 'ascending' : 'descending';
    }
    return undefined;
  };

  return movies.length ? (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Poster</Table.HeaderCell>
        <Table.HeaderCell
          sorted={getSorted('title')}
          onClick={(evt: React.KeyboardEvent) => handleToggle(evt, 'title')}
        >
          Title
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={getSorted('release_date')}
          onClick={(evt: React.KeyboardEvent) => handleToggle(evt, 'release_date')}
        >
          Release
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={getSorted('popularity')}
          onClick={(evt: React.KeyboardEvent) => handleToggle(evt, 'popularity')}
        >
          Popularity
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={getSorted('vote_average')}
          onClick={(evt: React.KeyboardEvent) => handleToggle(evt, 'vote_average')}
        >
          Vote Average
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  ) : null;
};

export default THead;
