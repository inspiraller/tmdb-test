const mockMoviesStorePg1And2 = [
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/1.jpg',
    genre_ids: [12],
    id: 1,
    overview: 'Movie 1',
    popularity: 1,
    release_date: '2020-01-01',
    title: 'Movie 1',
    vote_average: 1
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/2.jpg',
    genre_ids: [12],
    id: 2,
    overview: 'Movie 2',
    popularity: 2,
    release_date: '2020-01-02',
    title: 'Movie 2',
    vote_average: 2
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/3.jpg',
    genre_ids: [12],
    id: 3,
    overview: 'Movie 3',
    popularity: 3,
    release_date: '2020-01-03',
    title: 'Movie 3',
    vote_average: 3
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/4.jpg',
    genre_ids: [12],
    id: 4,
    overview: 'Movie 4',
    popularity: 4,
    release_date: '2020-01-04',
    title: 'Movie 4',
    vote_average: 4
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/5.jpg',
    genre_ids: [12],
    id: 5,
    overview: 'Movie 5',
    popularity: 5,
    release_date: '2020-01-05',
    title: 'Movie 5',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/6.jpg',
    genre_ids: [12],
    id: 6,
    overview: 'Movie 6',
    popularity: 6,
    release_date: '2020-01-06',
    title: 'Movie 6',
    vote_average: 6
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/7.jpg',
    genre_ids: [12],
    id: 7,
    overview: 'Movie 7',
    popularity: 7,
    release_date: '2020-01-07',
    title: 'Movie 7',
    vote_average: 7
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/8.jpg',
    genre_ids: [12],
    id: 8,
    overview: 'Movie 8',
    popularity: 8,
    release_date: '2020-01-08',
    title: 'Movie 8',
    vote_average: 8
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/9.jpg',
    genre_ids: [12],
    id: 9,
    overview: 'Movie 9',
    popularity: 9,
    release_date: '2020-01-09',
    title: 'Movie 9',
    vote_average: 9
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/10.jpg',
    genre_ids: [12],
    id: 10,
    overview: 'Movie 10',
    popularity: 10,
    release_date: '2020-01-10',
    title: 'Movie 10',
    vote_average: 10
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/11.jpg',
    genre_ids: [14],
    id: 11,
    overview: 'Movie 11',
    popularity: 11,
    release_date: '2020-01-11',
    title: 'Movie 11',
    vote_average: 11
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/12.jpg',
    genre_ids: [14],
    id: 12,
    overview: 'Movie 12',
    popularity: 12,
    release_date: '2020-01-12',
    title: 'Movie 12',
    vote_average: 12
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/13.jpg',
    genre_ids: [14],
    id: 13,
    overview: 'Movie 13',
    popularity: 13,
    release_date: '2020-01-13',
    title: 'Movie 13',
    vote_average: 13
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/14.jpg',
    genre_ids: [14],
    id: 14,
    overview: 'Movie 14',
    popularity: 14,
    release_date: '2020-01-14',
    title: 'Movie 14',
    vote_average: 14
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/15.jpg',
    genre_ids: [14],
    id: 15,
    overview: 'Movie 15',
    popularity: 15,
    release_date: '2020-01-15',
    title: 'Movie 15',
    vote_average: 15
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/16.jpg',
    genre_ids: [14],
    id: 16,
    overview: 'Movie 16',
    popularity: 16,
    release_date: '2020-01-16',
    title: 'Movie 16',
    vote_average: 16
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/17.jpg',
    genre_ids: [14],
    id: 17,
    overview: 'Movie 17',
    popularity: 17,
    release_date: '2020-01-17',
    title: 'Movie 17',
    vote_average: 17
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/18.jpg',
    genre_ids: [14],
    id: 18,
    overview: 'Movie 18',
    popularity: 18,
    release_date: '2020-01-18',
    title: 'Movie 18',
    vote_average: 18
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/19.jpg',
    genre_ids: [14],
    id: 19,
    overview: 'Movie 19',
    popularity: 19,
    release_date: '2020-01-19',
    title: 'Movie 19',
    vote_average: 19
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/20.jpg',
    genre_ids: [12, 14],
    id: 20,
    overview: 'Movie 20',
    popularity: 20,
    release_date: '2020-01-20',
    title: 'Movie 20',
    vote_average: 20
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/21.jpg',
    genre_ids: [12],
    id: 21,
    overview: 'Movie 21',
    popularity: 20,
    release_date: '2021-05-19',
    title: 'Movie 21',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/22.jpg',
    genre_ids: [12],
    id: 22,
    overview: 'Movie 22',
    popularity: 19,
    release_date: '2021-05-19',
    title: 'Movie 22',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/23.jpg',
    genre_ids: [12],
    id: 23,
    overview: 'Movie 23',
    popularity: 18,
    release_date: '2021-05-19',
    title: 'Movie 23',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/24.jpg',
    genre_ids: [12],
    id: 24,
    overview: 'Movie 24',
    popularity: 17,
    release_date: '2021-05-19',
    title: 'Movie 24',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/25.jpg',
    genre_ids: [12],
    id: 25,
    overview: 'Movie 25',
    popularity: 16,
    release_date: '2021-05-19',
    title: 'Movie 25',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/26.jpg',
    genre_ids: [12],
    id: 26,
    overview: 'Movie 26',
    popularity: 15,
    release_date: '2021-05-19',
    title: 'Movie 26',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/27.jpg',
    genre_ids: [12],
    id: 27,
    overview: 'Movie 27',
    popularity: 14,
    release_date: '2021-05-19',
    title: 'Movie 27',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/28.jpg',
    genre_ids: [12],
    id: 28,
    overview: 'Movie 28',
    popularity: 13,
    release_date: '2021-05-19',
    title: 'Movie 28',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/29.jpg',
    genre_ids: [12],
    id: 29,
    overview: 'Movie 29',
    popularity: 12,
    release_date: '2021-05-19',
    title: 'Movie 29',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/30.jpg',
    genre_ids: [12],
    id: 30,
    overview: 'Movie 30',
    popularity: 11,
    release_date: '2021-05-19',
    title: 'Movie 30',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/31.jpg',
    genre_ids: [14],
    id: 31,
    overview: 'Movie 31',
    popularity: 10,
    release_date: '2021-05-19',
    title: 'Movie 31',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/32.jpg',
    genre_ids: [14],
    id: 32,
    overview: 'Movie 32',
    popularity: 9,
    release_date: '2021-05-19',
    title: 'Movie 32',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/33.jpg',
    genre_ids: [14],
    id: 33,
    overview: 'Movie 33',
    popularity: 8,
    release_date: '2021-05-19',
    title: 'Movie 33',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/34.jpg',
    genre_ids: [34],
    id: 34,
    overview: 'Movie 34',
    popularity: 7,
    release_date: '2021-05-19',
    title: 'Movie 34',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/35.jpg',
    genre_ids: [14],
    id: 35,
    overview: 'Movie 35',
    popularity: 6,
    release_date: '2021-05-19',
    title: 'Movie 35',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/36.jpg',
    genre_ids: [14],
    id: 36,
    overview: 'Movie 36',
    popularity: 5,
    release_date: '2021-05-19',
    title: 'Movie 36',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/37.jpg',
    genre_ids: [14],
    id: 37,
    overview: 'Movie 37',
    popularity: 4,
    release_date: '2021-05-19',
    title: 'Movie 37',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/38.jpg',
    genre_ids: [14],
    id: 38,
    overview: 'Movie 38',
    popularity: 3,
    release_date: '2021-05-19',
    title: 'Movie 38',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/39.jpg',
    genre_ids: [14],
    id: 39,
    overview: 'Movie 39',
    popularity: 2,
    release_date: '2021-05-19',
    title: 'Movie 39',
    vote_average: 5
  },
  {
    custom_full_poster_path: 'http://image.tmdb.org/t/p//w92/40.jpg',
    genre_ids: [12, 14],
    id: 40,
    overview: 'Movie 40',
    popularity: 1,
    release_date: '2021-05-19',
    title: 'Movie 40',
    vote_average: 5
  }
];

export default mockMoviesStorePg1And2;
