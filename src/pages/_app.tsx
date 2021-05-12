import React, {FC, ComponentType} from 'react';
import { Provider } from 'react-redux'
import { saveState } from 'src/store/config/persist';
import { ApplicationState } from 'src/store/config/rootReducer';
import { useStore } from '../store/config/getStore';

interface Props {
  Component:  ComponentType<any>,
  pageProps: {
    initialReduxState: ApplicationState;
  }
}

const App: FC<Props> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  store.subscribe(() => {
    saveState(store.getState());
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default App;
