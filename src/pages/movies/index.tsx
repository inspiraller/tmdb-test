import React from 'react';
import LoadMovieGenres from 'src/components/Specific/LoadMovieGenres';
import MasterHead from 'src/components/Master/MasterHead';
import Movies from 'src/components/Specific/Movies';
import LoadImgConfig from 'src/components/Specific/LoadImgConfig';

const PageMovies = () => {
  return (
    <LoadMovieGenres>
      <LoadImgConfig>
        <MasterHead />
        <Movies />
      </LoadImgConfig>
    </LoadMovieGenres>
  );
};

export default PageMovies;
