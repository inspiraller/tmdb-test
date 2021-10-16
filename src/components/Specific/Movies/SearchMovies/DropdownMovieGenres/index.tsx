import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Dropdown, { ThandleDropdownChange } from 'src/components/Common/Dropdown';
import { ApplicationState } from 'src/store/config/rootReducer';
import text from 'src/util/text';

interface Props {
  handleChange: ThandleDropdownChange;
  style?: {
    [key: string]: string;
  };
}

const label = text('genre');
export const dataTestLabel = label;
export const dataTestid = 'movies-dropdown';

const DropdownMovieGenres: FC<Props> = ({ handleChange, style }) => {
  const genres = useSelector((state: ApplicationState) => state.movies?.genres);
  const Options = genres
    ? genres.map((item) => ({
        key: `${item.id}`,
        value: `${item.id}`,
        text: item.name
      }))
    : [];
  return (
    <Dropdown
      {...{
        dataTestid,
        name: 'genre',
        label,
        defaultValue: '',
        handleChange,
        Options,
        style
      }}
    />
  );
};

export default DropdownMovieGenres;
