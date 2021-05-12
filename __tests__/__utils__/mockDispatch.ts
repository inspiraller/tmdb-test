import { AnyAction } from 'redux';

type TmockDispatch = (
  actions: { [key: string]: (payload: any) => AnyAction },
  method: string,
  type?: string
) => jest.Mock;

const mockDispatch: TmockDispatch = (actionsRef, method, type = 'anything') => {
  const mocker = jest.fn();
  const actions = actionsRef;
  actions[method] = payload => {
    mocker(payload);
    return {
      type,
      payload
    };
  };
  return mocker;
};
/* example - simplified
const acSelectArticle = mockDispatch(actions, 'acSelectArticle') ===

const acSelectArticle = jest.fn();
actions.acSelectArticle = payload => {
  acSelectArticle(payload);
  return {
    type: 'anything',
    payload
  };
};
*/
export default mockDispatch;
