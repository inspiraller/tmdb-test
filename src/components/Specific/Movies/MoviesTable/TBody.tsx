import React, { FC } from 'react';
import { Table, Header } from 'semantic-ui-react';
import { PropsMovieLight } from 'src/types';
import { ContextMovies } from '../_ContextMovies';

const TBody: FC = () => {
  const { movies, maxPerPage, page } = React.useContext(ContextMovies);
  const end = 1 + maxPerPage * page + 1;
  const start = end - maxPerPage;
  return (
    <tbody>
      {movies.slice(start, end).map((item: PropsMovieLight) => (
        <tr key={`movie-id-${item.id}`}>
          <Table.Cell verticalAlign="top">
            <img src={item.custom_full_poster_path as string} alt={item.title} />
          </Table.Cell>
          <Table.Cell verticalAlign="top">
            <Header as="h2">{item.title}</Header>
            <p>{item.overview}</p>
            <em>
              <strong>Release date:</strong> {new Date(item.release_date).toLocaleDateString()}
            </em>
          </Table.Cell>
          <Table.Cell>{item.popularity}</Table.Cell>
          <Table.Cell>{item.vote_average}</Table.Cell>
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
