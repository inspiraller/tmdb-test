import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { setupServer } from 'msw/node';
import { hackActChildrenUseEffects, hackActUseEffects } from '__tests__/__utils__/hackAct';
import { Tstore, initializeStore } from 'src/store/config/getStore';
import WrapProvider from '__tests__/__utils__/WrapProvider';
import LoadMoviesShowing from 'src/components/Specific/LoadAllMoviesShowing';

import mockMoviesStorePg1And2 from 'src/endpoints/movie_list/mockMoviesStorePg1And2';
import { mockImgConfig } from 'src/endpoints/imgConfig';
import { mswMoviesShowing } from 'msw_mock_ajax/index';

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
  describe('Onload - with 2 pages of data populates the store', () => {
    beforeAll(async () => {
      store = initializeStore({ movies: { img_config: mockImgConfig } });
      wrapper = mount(
        <WrapProvider storeCustom={store}>
          <LoadMoviesShowing />
        </WrapProvider>
      );
      await hackActUseEffects(wrapper);
      await hackActChildrenUseEffects(wrapper); // Do need
    });
    it('should have: state.movies.movies === mockMoviesShowing', async () => {
      const state = store.getState();
      expect(state?.movies?.movie_list).toEqual(mockMoviesStorePg1And2);
    });
  });
});
