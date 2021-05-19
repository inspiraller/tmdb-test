import React, { FC, useCallback, useContext, useState, useEffect } from 'react';
import { Button, Form, Input, InputOnChangeData } from 'semantic-ui-react';

import useMovieList from 'src/store/data/movies/useMovieList';
import { PropsMovieLight } from 'src/types';

import { ThandleDropdownChange } from 'src/components/Common/Dropdown';
import text from 'src/util/text';
import DropdownMovieGenres from './DropdownMovieGenres';
import { ContextMovies } from '../_ContextMovies';

type ThandleInputChange = (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;

const SearchMovies: FC = () => {
  const { setMovies, setPage } = useContext(ContextMovies);
  const [genres, setGenres] = useState<string[]>([]);
  const [voteAvg, setVoteAvg] = useState<string>('');

  const { movie_list } = useMovieList();

  const handleSearchMovies = useCallback(() => {
    if (movie_list) {
      let reduced: PropsMovieLight[] = movie_list;

      if (genres.length) {
        const arrGenresAsNum: number[] = genres.map((item) => parseInt(item, 10));
        reduced = reduced.reduce((accum, cur) => {
          const hasAllGenres = arrGenresAsNum.every((id) => cur.genre_ids.indexOf(id) !== -1);
          if (hasAllGenres) {
            accum.push(cur);
          }
          return accum;
        }, [] as PropsMovieLight[]);
      }

      if (voteAvg.length) {
        const intVote = parseInt(voteAvg, 10);
        reduced = reduced.reduce((accum, cur) => {
          if (cur.vote_average >= intVote) {
            accum.push(cur);
          }
          return accum;
        }, [] as PropsMovieLight[]);
      }
      setMovies(reduced);
    }
    setPage(1);
  }, [genres, voteAvg, movie_list]);

  useEffect(() => {
    if (movie_list) {
      handleSearchMovies(); // preload
    }
  }, [movie_list]);

  const handleDropdownChange: ThandleDropdownChange = (_, data) => {
    setGenres(data.value as string[]);
  };
  const handleVoteChange: ThandleInputChange = (_, data) => {
    setVoteAvg(data.value);
  };
  return (
    <Form>
      <Form.Group>
        <DropdownMovieGenres
          {...{ handleChange: handleDropdownChange }}
          style={{ width: '400px' }}
        />
        <Input
          label={{ basic: true, content: text('vote avg') }}
          labelPosition="right"
          placeholder={text('avg')}
          style={{ width: '54px' }}
          onChange={handleVoteChange}
        />
        <Button style={{ marginLeft: '80px' }} primary onClick={handleSearchMovies}>
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchMovies;
