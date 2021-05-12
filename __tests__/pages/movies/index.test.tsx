import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
// import renderer from 'react-test-renderer';

import WrapProvider from '__tests__/__utils__/WrapProvider';

import PageMovies from 'src/pages/movies/index';
import MoviesTable from 'src/components/Specific/Movies/MoviesTable/index';
import LoadMovieGenres from 'src/components/Specific/LoadMovieGenres/index';
import LoadImgConfig from 'src/components/Specific/LoadImgConfig/index';
import MasterHead from 'src/components/Master/MasterHead';

let wrapper: ReactWrapper<any, Readonly<{}>>;
let tree: any;

describe('Home', () => {
  beforeAll(() => {
    // tree = renderer
    //   .create(
    //     <WrapProvider>
    //       <PageMovies />
    //     </WrapProvider>
    //   )
    //   .toJSON();

    wrapper = mount(
      <WrapProvider>
        <PageMovies />
      </WrapProvider>
    );
  });
  describe('Onload', () => {
    it('should contain: component - LoadMovieGenres', () => {
      expect(wrapper.find(LoadMovieGenres).exists()).toBe(true);
    });
    it('should contain: component - LoadImgConfig', () => {
      expect(wrapper.find(LoadImgConfig).exists()).toBe(true);
    });
    it('should contain: component - MasterHead', () => {
      expect(wrapper.find(MasterHead).exists()).toBe(true);
    });
    it('should contain: component - MoviesTable', () => {
      expect(wrapper.find(MoviesTable).exists()).toBe(true);
    });
  });
});
