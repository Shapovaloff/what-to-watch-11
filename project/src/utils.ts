import {FilmsType, FilmType} from './types/films';

export const getSimilarFilms = (films: FilmsType, film: FilmType, id: number): FilmsType => {
  const similarFilms = films.filter((filmFilter: FilmType) => filmFilter.id !== id && film.genre === filmFilter.genre);
  return similarFilms.slice(0, 4);
};

export const getFilm = (films: FilmsType, id: number): FilmType => {
  const findFilms = films.find((film: FilmType) => film.id === id);
  if (!findFilms) {
    return films[0];
  }
  return findFilms;
};
