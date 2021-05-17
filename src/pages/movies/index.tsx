import React from 'react';
import MasterHead from 'src/components/Master/MasterHead';
import LoadImgConfig from 'src/components/Specific/LoadImgConfig';
import LoadMovieGenres from 'src/components/Specific/LoadMovieGenres';
import LoadAllMoviesShowing from 'src/components/Specific/LoadAllMoviesShowing';
import Movies from 'src/components/Specific/Movies';

const PageMovies = () => {
  return (
    <LoadMovieGenres>
      <LoadImgConfig>
        <LoadAllMoviesShowing>
          <MasterHead />
          <Movies />
        </LoadAllMoviesShowing>
      </LoadImgConfig>
    </LoadMovieGenres>
  );
};

export default PageMovies;
