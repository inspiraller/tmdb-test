import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { setupServer } from 'msw/node';
import hackActUseEffects from '__tests__/__utils__/hackAct';
import { Tstore, initializeStore } from 'src/store/config/getStore';
import WrapProvider from '__tests__/__utils__/WrapProvider';
import LoadImgConfig from 'src/components/Specific/LoadImgConfig';
import { mswImgConfig } from '__tests__/axios';
import mockImgConfig from '__tests__/axios/_mockImgConfig';

let wrapper: ReactWrapper<any, Readonly<{}>>;

let store: Tstore;

const server = setupServer(mswImgConfig);

describe('LoadImgConfig', () => {
  afterAll(() => {
    server.close();
  });
  beforeAll(async () => {
    server.listen();

    store = initializeStore({});
    wrapper = mount(
      <WrapProvider storeCustom={store}>
        <LoadImgConfig />
      </WrapProvider>
    );
    await hackActUseEffects(wrapper);
  });
  describe('Onload', () => {
    it('should have: state.movies.img_config === mockImageConfig', () => {
      const state = store.getState();
      expect(state?.movies?.img_config).toEqual(mockImgConfig);
    });
  });
});
