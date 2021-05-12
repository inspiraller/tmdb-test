export interface PropsMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating?: number;
  media_type?: string; // enum movie?
  known_for?: string; // "#/definitions/movie-list-results-object-with-media_type" | "#/definitions/tv-list-results-object-with-media_type"
  origin_country?: string[];
}
export interface PropsMovieLight {
  id: number;
  title: string;
  popularity: number;
  vote_average: number;
  custom_full_poster_path: string;
}

export interface PropsMovieGenre {
  id: number;
  name: string;
}

export interface PropsImgConfig {
  base_url: string;
  poster_sizes: string[];
}
