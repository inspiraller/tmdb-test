import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { initializeStore, Tstore } from 'src/store/config/getStore';

const store = initializeStore();

interface Props {
  storeCustom?: Tstore;
}
const WrapProvider: FC<Props> = ({ children, storeCustom = store }) => (
  <Provider store={storeCustom}>{children}</Provider>
);

export default WrapProvider;
