import { TJson, TJsonVal } from 'src/types';

type TgetKeyValPair = (keyValPair: string) => TJson;
const getKeyValPair: TgetKeyValPair = keyValPair => {
  const spEquals = decodeURI(keyValPair).split('=');
  const key = spEquals[0];
  let val = spEquals[1];
  if (val && val.indexOf('{') !== -1) {
    try {
      val = JSON.parse(val);
    } catch (err) {
      // no need to catch. val will silently be whatever value, string, number
    }
  }
  return {
    [key]: val
  };
};

type TgetQs = (qs: string) => TJson | null;
export const getQs: TgetQs = qs => {
  if (!qs) {
    return null;
  }
  const spHash = qs.replace(/^\?/, '').split('#');
  const sp = spHash[0].split('&');
  return sp.reduce((accum, cur) => ({ ...accum, ...getKeyValPair(cur) }), {} as TJson);
};

type TgetQsVal = (qs: string, key: string) => TJsonVal | null;
export const getQsVal: TgetQsVal = (qs, key) => {
  const qsj = getQs(qs);
  return qsj && qsj[key];
};

export default getQs;
