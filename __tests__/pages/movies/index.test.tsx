import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { setupServer } from 'msw/node';
import WrapProvider from '__tests__/__utils__/WrapProvider';

import PageMovies from 'src/pages/movies/index';
import MoviesTable from 'src/components/Specific/Movies/MoviesTable/index';
import LoadMovieGenres from 'src/components/Specific/LoadMovieGenres/index';
import LoadImgConfig from 'src/components/Specific/LoadImgConfig/index';
import MasterHead from 'src/components/Master/MasterHead';
import LoadAllMoviesShowing from 'src/components/Specific/LoadAllMoviesShowing';

import { mswGenres, mswImgConfig, mswMoviesShowing } from '__tests__/axios';
import hackActUseEffects from '__tests__/__utils__/hackAct';

let wrapper: ReactWrapper<any, Readonly<{}>>;

const server = setupServer(mswGenres, mswImgConfig, mswMoviesShowing);

describe('Movies', () => {
  beforeAll(async () => {
    server.listen();
    wrapper = mount(
      <WrapProvider>
        <PageMovies />
      </WrapProvider>
    );
    await hackActUseEffects(wrapper);
  });
  afterAll(() => {
    server.close();
  });
  describe('Onload', () => {
    it('should contain: component - LoadMovieGenres', () => {
      expect(wrapper.find(LoadMovieGenres).exists()).toBe(true);
    });
    it('should contain: component - LoadImgConfig', () => {
      expect(wrapper.find(LoadImgConfig).exists()).toBe(true);
    });
    it('should contain: component - LoadAllMoviesShowing', () => {
      expect(wrapper.find(LoadAllMoviesShowing).exists()).toBe(true);
    });
    it('should contain: component - MasterHead', () => {
      expect(wrapper.find(MasterHead).exists()).toBe(true);
    });
    it('should contain: component - MoviesTable', () => {
      expect(wrapper.find(MoviesTable).exists()).toBe(true);
    });
  });
});
