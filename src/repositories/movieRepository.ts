import db from '../database/db';
import { MovieData } from '../protocols/movie';

export async function getAllMovies() {
  const query = 'SELECT * FROM movies';
  return db.query(query);
}

export async function getMovieById(id: number) {
  const query = 'SELECT * FROM movies WHERE id = $1';
  return db.query(query, [id]);
}

export async function createMovie(movieData: MovieData) {
  const { name, platform, genre, status, rating, resume } = movieData;
  const query =
    'INSERT INTO movies (name, platform, genre, status, rating, resume) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  return db.query(query, [name, platform, genre, status, rating, resume]);
}

export async function updateMovie(id: number, movieData: MovieData) {
  const { name, platform, genre, status, rating, resume } = movieData;
  const query =
    'UPDATE movies SET name = $1, platform = $2, genre = $3, status = $4, rating = $5, resume = $6 WHERE id = $7 RETURNING *';
  return db.query(query, [name, platform, genre, status, rating, resume, id]);
}

export async function deleteMovie(id: number) {
  const query = 'DELETE FROM movies WHERE id = $1';
  return db.query(query, [id]);
}