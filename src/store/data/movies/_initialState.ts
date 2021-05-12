import { PropsImgConfig, PropsMovieGenre } from "src/types";

export interface PropsInitial {
  genres?: PropsMovieGenre[];
  img_config?: PropsImgConfig;
}

const initialState: PropsInitial = {
};

export default initialState;
