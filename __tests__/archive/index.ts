import { ENDPOINT_GET_MOVIES_SHOWING } from 'src/components/Specific/LoadAllMoviesShowing';
import { ENDPOINT_GET_IMG_CONFIG } from 'src/components/Specific/LoadImgConfig';
import { ENDPOINT_GET_GENRES, PropsAxiosGetGenres } from 'src/components/Specific/LoadMovieGenres';
import { getMockSuccess } from '__tests__/__utils__/mockAjaxResults';
import mockGenres from './_mockGenres';
import mockImgConfig from './_mockImgConfig';
import mockMoviesShowing from '../archive/_storeAllMoviesShowing';

export const axiosMockGenres = () =>
  getMockSuccess<any>(ENDPOINT_GET_GENRES, {
    data: {
      genres: mockGenres
    }
  });

export const axiosMockImgConfig = () =>
  getMockSuccess<any>(ENDPOINT_GET_IMG_CONFIG, {
    data: {
      images: mockImgConfig
    }
  });

export const axiosMockMoviesShowing = () =>
  getMockSuccess<any>(ENDPOINT_GET_MOVIES_SHOWING, {
    data: {
      page: 1,
      results: mockMoviesShowing,
      total_pages: 1
    }
  });
