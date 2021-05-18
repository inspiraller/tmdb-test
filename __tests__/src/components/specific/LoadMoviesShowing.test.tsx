import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { setupServer } from 'msw/node';
import hackActUseEffects from '__tests__/__utils__/hackAct';
import { Tstore, initializeStore } from 'src/store/config/getStore';
import WrapProvider from '__tests__/__utils__/WrapProvider';
import LoadMoviesShowing from 'src/components/Specific/LoadAllMoviesShowing';
import mockImgConfig from '__tests__/axios/_mockImgConfig';
import { mswMoviesShowing } from '__tests__/axios/index';
import storeMoviesShowing from '__tests__/axios/_storeMoviesShowing';

let wrapper: ReactWrapper<any, Readonly<{}>>;

let store: Tstore;

const server = setupServer(mswMoviesShowing);

describe('LoadMoviesShowing', () => {
  afterAll(() => {
    server.close();
  });
  beforeAll(async () => {
    server.listen();
  });
  describe('Onload - with 1 page', () => {
    beforeAll(async () => {
      store = initializeStore({ movies: { img_config: mockImgConfig } });
      wrapper = mount(
        <WrapProvider storeCustom={store}>
          <LoadMoviesShowing />
        </WrapProvider>
      );
      await hackActUseEffects(wrapper);
    });
    it('should have: state.movies.movies === mockMoviesShowing', () => {
      const state = store.getState();
      expect(state?.movies?.movie_list).toEqual(storeMoviesShowing);
    });
  });
});
