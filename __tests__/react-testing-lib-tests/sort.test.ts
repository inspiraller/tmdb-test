import {
  TCol,
  TarrSortTypes,
  TsortType,
  updateSortTypes
} from 'src/components/Specific/Movies/SearchMovies/sort';

const defaultDir = 'asc';

describe('updateSort', () => {
  it('should set default sort object', () => {
    const arrSortTypes: TarrSortTypes = [];
    const col: TCol = 'title';
    const sortType: TsortType = 'string';

    const arrSortTypesUpdated = updateSortTypes({ arrSortTypes, col, sortType, shiftKey: false });

    expect(arrSortTypesUpdated).toMatchObject([
      {
        col,
        dir: defaultDir,
        sortType
      }
    ]);
  });
});



