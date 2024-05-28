import { mockFilms, mockStarShip } from '@/__tests__/mock_data';
import { describe, expect, it } from 'vitest';
import { createFilmNodes, createStarshipNodes } from '@/utils/nodes';

describe('createFilmNodes', () => {
  it('should create film nodes with correct properties', () => {
    const heroId = 1;
    const heroName = 'Hero Name';
    const filmNodes = createFilmNodes(mockFilms, heroId, heroName);

    expect(filmNodes).toEqual([
      { id: 'hero-1', position: { x: 0, y: 0 }, data: { label: 'Hero Name' } },
      { id: 'film-1', position: { x: -100, y: 100 }, data: { label: 'Film 1' } },
      { id: 'film-2', position: { x: 100, y: 100 }, data: { label: 'Film 2' } },
    ]);
  });
});

describe('createStarShipsNodes', () => {
  it('should create starships nodes with correct properties', () => {
    const filmNodes = createStarshipNodes(mockStarShip);

    expect(filmNodes).toEqual([{ id: 'starship-48', position: { x: 0, y: 300 }, data: { label: 'Jedi starfighter' } }]);
  });
});
