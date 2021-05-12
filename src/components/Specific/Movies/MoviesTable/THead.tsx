import React, { FC, useCallback } from "react";
import { PropsMovieLight } from "src/types";
import { Table } from "semantic-ui-react";
import { PropsContext, ContextMovies } from "../_ContextMovies";
import sortKey from "./sort";

const capitalise = (str: string) =>
  `${str.substring(0, 1).toUpperCase()}${str.substr(1)}`;

const THead: FC = () => {
  // TODO: sort maybe better localised to Thead
  const { movies, setMovies, sort } = React.useContext(
    ContextMovies
  ) as PropsContext;
  type Tkey = keyof typeof sort;
  const movie0 = movies[0];

  const resetTogglers = useCallback(() => {
    Object.keys(sort).map((sortTogglerName) => {
      sort[sortTogglerName as Tkey].set(undefined);
    });
  }, []);

  const handleToggle = (keyName: keyof PropsMovieLight) => {
    if (keyName === "id" || keyName === 'custom_full_poster_path') {
      return;
    }
    const sortType = keyName !== "title" ? "number" : "string";
    resetTogglers();
    const toggleItem = sort[keyName as Tkey];
    toggleItem.set(!toggleItem.asc);
    setMovies(
      sortKey<PropsMovieLight>(movies, keyName, toggleItem.asc, sortType)
    );
  };

  const getSorted = (key: string) => {
    const asc = sort[key as keyof typeof sort]?.asc;
    const direction = asc ? "ascending" : "descending";
    return asc !== undefined ? direction : undefined;
  }

  return movies.length ? (
    <Table.Header>
      <Table.Row>
        {Object.keys(movie0).map((key) => (
          <Table.HeaderCell
            key={`movie-id-${movie0.id}-th-${key}`}
            sorted={
              getSorted(key)
            }
            onClick={() => handleToggle(key as keyof PropsMovieLight)}
          >
            {capitalise(key)}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  ) : null;
};

export default THead;
