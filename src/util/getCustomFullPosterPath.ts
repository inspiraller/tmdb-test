import { PropsImgConfig } from 'src/types';

const indextFirstItem = 0;

const getCustomFullPosterPath = (poster_path: string, img_config: PropsImgConfig) => {
  const { base_url, poster_sizes } = img_config;
  const posterSizeSmall = poster_sizes[indextFirstItem];
  const custom_full_poster_path = `${base_url}/${posterSizeSmall}${poster_path}`;
  return custom_full_poster_path;
};

type TgetImageWidth = (image_config: PropsImgConfig) => number;

export const getImageWidth: TgetImageWidth = (image_config) => {
  const { poster_sizes } = image_config;
  const first = poster_sizes[indextFirstItem]; // 'w92' for exmaple
  const size = parseInt(first.substr(1), 10);
  return size;
};

export default getCustomFullPosterPath;
