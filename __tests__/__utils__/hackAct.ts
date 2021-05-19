import { act } from 'react-dom/test-utils';
import { ReactWrapper } from 'enzyme';

type TWrapper = ReactWrapper<any, Readonly<{}>>;

export const hackActUseEffects = async (wrapper: TWrapper) => {
  await new Promise((resolve) => setImmediate(resolve));
  await act(
    () =>
      new Promise<void>((resolve) => {
        resolve();
      })
  );
  // wrapper.update();
};

export const hackActChildrenUseEffects = async (wrapper: TWrapper) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 50); // number reflective of movies being reduced. 1 page of 20 === 10,
  });
  wrapper.update();
};
