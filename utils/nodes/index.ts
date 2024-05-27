import { IFilm, IStarShip } from '@/types';

export function createFilmNodes(heroFilms: IFilm[], heroId: number, heroName: string) {
  const filmNodes = heroFilms.map((film, idx) => ({
    id: `film-${film.id}`,
    position: { x: idx * 200, y: 100 },
    data: { label: film.title },
  }));

  const heroNode = {
    id: `hero-${heroId}`,
    position: { x: 250, y: 0 },
    data: { label: heroName },
  };

  return [heroNode, ...filmNodes];
}

export function createStarshipNodes(heroStarships: IStarShip[]) {
  return heroStarships.map((starship, idx) => ({
    id: `starship-${starship.id}`,
    position: { x: idx * 200, y: 300 },
    data: { label: starship.name },
  }));
}
