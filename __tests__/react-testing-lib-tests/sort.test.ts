import { Tdir, TTableHeading, TarrSortTypes, TsortType, updateSortTypes } from 'src/util/sort';

let arrSortTypes: TarrSortTypes = [];
let dir: Tdir;
let col: TTableHeading;
let sortType: TsortType;
let shiftKey: boolean;

describe('updateSort', () => {
  describe('single sort', () => {
    it('should set - single sort - title - asc', () => {
      dir = 'asc';
      col = 'title';
      sortType = 'string';
      shiftKey = false;
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes).toMatchObject([
        {
          col,
          dir,
          sortType
        }
      ]);
    });
  });
  describe('single sort - Toggle directions', () => {
    it('should set - single sort - title - asc', () => {
      arrSortTypes = []; // reset
      dir = 'asc';
      col = 'title';
      sortType = 'string';
      shiftKey = false;
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes).toMatchObject([
        {
          col,
          dir,
          sortType
        }
      ]);
    });
    it('should set - single sort - popularity - asc (overwrite existing sort', () => {
      col = 'popularity';
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes).toMatchObject([
        {
          col,
          dir,
          sortType
        }
      ]);
    });
    it('should TOGGLE existing sort to NEW dir - as desc', () => {
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes).toMatchObject([
        {
          col,
          dir: 'desc',
          sortType
        }
      ]);
    });
    it('should Remove the item from sort because its now empty dir', () => {
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes.length).toBe(0);
    });
  });
  describe('shiftKey - dbl sort', () => {
    it('should set - release_date - asc', () => {
      arrSortTypes = [
        {
          dir: 'desc',
          col: 'title',
          sortType: 'string'
        }
      ]; // preset
      col = 'release_date';
      shiftKey = true;
      sortType = 'string';
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes).toMatchObject([
        arrSortTypes[0],
        {
          col,
          dir: 'asc',
          sortType: 'string'
        }
      ]);
    });
    it('should only toggle - release_date -  to desc', () => {
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes).toMatchObject([
        arrSortTypes[0],
        {
          col,
          dir: 'desc',
          sortType: 'string'
        }
      ]);
    });
    it('should remove - release_date', () => {
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes).toMatchObject([arrSortTypes[0]]);
      expect(arrSortTypes.length).toBe(1);
    });
    it('should toggle title - was on desc - so gets removed', () => {
      col = 'title';
      sortType = 'string';
      arrSortTypes = updateSortTypes({ arrSortTypes, col, sortType, shiftKey });
      expect(arrSortTypes.length).toBe(0);
    });
  });
});
