import * as moviesRepository from '../repositories/movieRepository';
import { MovieData } from '../protocols/movie';

export function getAllMovies() {
  return moviesRepository.getAllMovies();
}

export function getMovieById(id: number) {
  return moviesRepository.getMovieById(id);
}

export function createMovie(movieData: MovieData) {
  return moviesRepository.createMovie(movieData);
}

export function updateMovie(id: number, movieData: MovieData) {
  return moviesRepository.updateMovie(id, movieData);
}

export function deleteMovie(id: number) {
  return moviesRepository.deleteMovie(id);
}