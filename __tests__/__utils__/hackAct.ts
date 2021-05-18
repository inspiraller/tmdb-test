import { act } from 'react-dom/test-utils';
import { ReactWrapper } from 'enzyme';

const hackActUseEffects = async (wrapper: ReactWrapper<any, Readonly<{}>>) => {
  await new Promise((resolve) => setImmediate(resolve));
  await act(
    () =>
      new Promise<void>((resolve) => {
        resolve();
      })
  );
  wrapper.update();
};

export default hackActUseEffects;
