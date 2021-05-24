import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { setupServer } from 'msw/node';
import { hackActUseEffects } from '__tests__/__utils__/hackAct';
import { Tstore, initializeStore } from 'src/store/config/getStore';
import WrapProvider from '__tests__/__utils__/WrapProvider';
import LoadMovieGenres from 'src/components/Specific/LoadMovieGenres';
import { mswGenres } from 'msw_mock_ajax/index';
import { mockGenres } from 'src/endpoints/genres';

let wrapper: ReactWrapper<any, Readonly<{}>>;

let store: Tstore;

const server = setupServer(mswGenres);

describe('LoadMovieGenres', () => {
  afterAll(() => {
    server.close();
  });
  beforeAll(async () => {
    server.listen();

    store = initializeStore({});
    wrapper = mount(
      <WrapProvider storeCustom={store}>
        <LoadMovieGenres />
      </WrapProvider>
    );
    await hackActUseEffects(wrapper);
  });
  describe('Onload', () => {
    it('should have: state.movies.genres === mockGenres', () => {
      const state = store.getState();
      expect(state?.movies?.genres).toEqual(mockGenres);
    });
  });
});
