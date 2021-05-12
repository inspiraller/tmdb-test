import { PERSIST_STORE, KILL_STORE } from 'src/config';

import { ApplicationState } from './rootReducer';

type TloadState = () => ApplicationState;
export const loadState: TloadState = () => {
  if (KILL_STORE) {
    localStorage.removeItem('state');
  }
  if (!PERSIST_STORE) {
    return {};
  }
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    return state;
  } catch (e) {
    return undefined;
  }
};

type TsaveState = (state: ApplicationState) => void;
export const saveState: TsaveState = state => {
  if (!PERSIST_STORE) {
    return;
  }
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
