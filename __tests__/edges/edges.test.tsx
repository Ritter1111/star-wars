import { describe, expect, it } from 'vitest';
import { createFilmEdges, createStarshipEdges } from '@/utils/edges';
import { mockFilms, mockStarShip } from '@/__tests__/mock_data';

const heroId = 1;

describe('createFilmEdges', () => {
  it('should create edges between hero and films', () => {
    const edges = createFilmEdges(mockFilms, heroId);
    expect(edges).toEqual([
      { id: 'film-edge1', source: 'hero-1', target: 'film-1', animated: true },
      { id: 'film-edge2', source: 'hero-1', target: 'film-2', animated: true },
    ]);
  });

  it('should return an empty array if no films are provided', () => {
    const edges = createFilmEdges([], heroId);

    expect(edges).toEqual([]);
  });
});

describe('createStarshipEdges', () => {
  it('should create edges between films and starships', () => {
    const edges = createStarshipEdges(mockFilms, mockStarShip);

    expect(edges).toEqual([{ id: 'starship-edge-48', source: 'film-1', target: 'starship-48', animated: true }]);
  });

  it('should return an empty array if no films are provided', () => {
    const edges = createStarshipEdges([], mockStarShip);

    expect(edges).toEqual([]);
  });

  it('should return an empty array if no starships are provided', () => {
    const edges = createStarshipEdges(mockFilms, []);

    expect(edges).toEqual([]);
  });
});
