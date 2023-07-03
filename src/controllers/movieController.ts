import { Request, Response } from 'express';
import * as movieService from '../services/movieService';

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await movieService.getMovieById(Number(id));
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function createMovie(req: Request, res: Response) {
  try {
    const movieData = req.body;
    const movie = await movieService.createMovie(movieData);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movieData = req.body;
    const movie = await movieService.updateMovie(Number(id), movieData);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await movieService.deleteMovie(Number(id));
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}