import React, { FC } from "react";
import THead from "./THead";
import TBody from "./TBody";
import { Table } from "semantic-ui-react";
import { ContextMovies } from "../_ContextMovies";
const MoviesTable: FC = () => {
  const { movies } = React.useContext(ContextMovies);

  return movies.length ? (
    <Table sortable>
      <THead />
      <TBody />
    </Table>
  ) : null;
};

export default MoviesTable;
