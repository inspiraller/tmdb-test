import type { PropsMovieLight } from 'src/types';

export const headings = {
  title: 'Title',
  popularity: 'Propularity',
  vote_average: 'Vote Average',
  custom_full_poster_path: 'Poster',
  genre_ids: 'Genres',
  release_date: 'Release'
};

export type TCol = keyof typeof headings;
type Tdir = 'asc' | 'desc' | '';
export type TsortType = 'number' | 'string';
interface PropSortType {
  dir: Tdir;
  col: TCol;
  sortType: TsortType;
}
export type TarrSortTypes = Array<PropSortType>;

type tupdateSort = (props: {
  arrSortTypes: TarrSortTypes;
  col: TCol;
  shiftKey: boolean;
  sortType: TsortType;
}) => TarrSortTypes;

export const updateSortTypes: tupdateSort = ({ arrSortTypes, col, shiftKey, sortType }) => {
  let arrSortTypesUpdate = arrSortTypes.slice();
  const objDefaultSort: PropSortType = {
    col,
    dir: 'asc',
    sortType
  };
  let newDir: Tdir = objDefaultSort.dir;
  const indDir = arrSortTypes.findIndex((item) => item.col === col);
  const isExist = indDir !== -1;
  if (isExist) {
    const { dir } = arrSortTypes[indDir];
    if (dir === 'asc') {
      newDir = 'desc';
    } else if (dir === 'desc') {
      newDir = '';
    }
    if (!newDir) {
      arrSortTypesUpdate.splice(indDir, 1); // at position indDir - remove 1
    } else {
      arrSortTypesUpdate[indDir].dir = objDefaultSort.dir;
    }
  }

  if (shiftKey && !isExist) {
    arrSortTypesUpdate.push(objDefaultSort); // append
  } else if (!shiftKey) {
    arrSortTypesUpdate = [objDefaultSort]; // reset
  } // else {} // it gets mutated anyway above
  return arrSortTypesUpdate;
};

const sortEach = (a: TNumOrString, b: TNumOrString): number => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

type TNumOrString = number | string;

const getAsStringOrNumber = (
  aSort: TNumOrString,
  bSort: TNumOrString,
  sortType: TsortType
): { aSort: TNumOrString; bSort: TNumOrString } => {
  let aSortUpdated = aSort;
  let bSortUpdated = bSort;
  if (sortType === 'number') {
    const aSortNum = Number(aSort);
    const bSortNum = Number(bSort);
    aSortUpdated = !Number.isNaN(aSortNum) ? aSortNum : -1;
    bSortUpdated = !Number.isNaN(bSortNum) ? bSortNum : -1;
  }
  return { aSort: aSortUpdated, bSort: bSortUpdated };
};

interface PropsSortTable {
  tableData: PropsMovieLight[];
  arrSortTypes: TarrSortTypes;
}

type TsortTable = (props: PropsSortTable) => PropsMovieLight[];

export const sortTable: TsortTable = ({ tableData, arrSortTypes }) => {
  const fnSort = (arrA: PropsMovieLight, arrB: PropsMovieLight) =>
    arrSortTypes.reduce((acc, cur) => {
      const { col, dir, sortType } = cur;
      if (acc === 0) {
        const { aSort, bSort } = getAsStringOrNumber(
          arrA[col] as TNumOrString,
          arrB[col] as TNumOrString,
          sortType
        );

        // default as text
        return dir === 'asc' ? sortEach(aSort, bSort) : sortEach(bSort, aSort);
      }
      return acc;
    }, 0);

  return tableData.slice().sort(fnSort);
};
