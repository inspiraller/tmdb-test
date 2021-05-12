import { useMemo } from "react";
import { Store } from "redux";
import configureStore from "./configureStore";
import { loadState } from "./persist";
import { ApplicationState } from "./rootReducer";

export type Tstore = Store<ApplicationState>;

let store: Tstore | undefined;

const initStore = (preloadedState: ApplicationState = loadState()) => configureStore({ initialState: preloadedState });

export const initializeStore = (preloadedState: ApplicationState = {}) => {
  let _store: Tstore = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
};
export function useStore(initialState: ApplicationState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
