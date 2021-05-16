import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
// import renderer from 'react-test-renderer';

import WrapProvider from '__tests__/__utils__/WrapProvider';

import PageCreateSession, { dataTestidError } from 'src/pages/create-session/CreateSession';
import getSelector from '__tests__/__utils__/getSelector';

const selError = getSelector(dataTestidError);

let wrapper: ReactWrapper<any, Readonly<{}>>;
let tree: any;

describe('create-session', () => {
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
        <PageCreateSession />
      </WrapProvider>
    );
  });
  describe('Onload - no querystring', () => {
    it('should contain: Error', () => {
      expect(wrapper.find(selError).exists()).toBe(true);
    });
  });
});
