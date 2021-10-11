import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import WrapProvider from '__tests__/__utils__/WrapProvider';

import PageMovies from 'src/pages/movies/index';

import MoviesSearch from 'src/components/Specific/Movies/SearchMovies/index';
import MoviesCount, { dataTestid } from 'src/components/Specific/Movies/MoviesCount';
import MoviesTable from 'src/components/Specific/Movies/MoviesTable';
import MoviesPagination from 'src/components/Specific/Movies/MoviesPagination';
import LoadMovieGenres from 'src/components/Specific/LoadMovieGenres';
import LoadImgConfig from 'src/components/Specific/LoadImgConfig';
import MasterHead from 'src/components/Master/MasterHead';
import LoadAllMoviesShowing from 'src/components/Specific/LoadAllMoviesShowing';

import { mswServerAll } from 'msw_mock_ajax/index';
import { hackActUseEffects, hackActChildrenUseEffects } from '__tests__/__utils__/hackAct';

import getSelector from '__tests__/__utils__/getSelector';

let wrapper: ReactWrapper<any, Readonly<{}>>;

const server = mswServerAll();

const selMoviesCount = getSelector(dataTestid);

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
    describe('Loaded omponents', () => {
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
      it('should contain: component - MoviesSearch', () => {
        expect(wrapper.find(MoviesSearch).exists()).toBe(true);
      });
      it('should contain: component - MoviesCount', () => {
        expect(wrapper.find(MoviesCount).exists()).toBe(true);
      });
      it('should contain: component - MoviesTable', () => {
        expect(wrapper.find(MoviesTable).exists()).toBe(true);
      });
      it('should contain: component - MoviesPagination', () => {
        expect(wrapper.find(MoviesPagination).exists()).toBe(true);
      });
    });
    describe('Loaded omponents - contents - preload search data', () => {
      it('should contain: component - data-testid === movies-count with a number result', async () => {
        const result = await hackActChildrenUseEffects(wrapper);
        const text = wrapper.find(selMoviesCount).text();
        expect(text.search(/ [1-9]/) !== -1).toBe(true);
      });
    });
  });
});
