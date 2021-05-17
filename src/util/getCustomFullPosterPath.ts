import { PropsImgConfig } from 'src/types';

const getCustomFullPosterPath = (poster_path: string, img_config: PropsImgConfig) => {
  const { base_url, poster_sizes } = img_config;
  const posterSizeSmall = poster_sizes[0];
  const custom_full_poster_path = `${base_url}/${posterSizeSmall}${poster_path}`;
  return custom_full_poster_path;
};

export default getCustomFullPosterPath;
