import { IFilm, IStarShip } from '@/types';

function calculatePositions(count: number, spacing: number, yPosition: number) {
  const positions = [];
  const startX = -((count - 1) * spacing) / 2;

  for (let i = 0; i < count; i += 1) {
    positions.push({ x: startX + i * spacing, y: yPosition });
  }

  return positions;
}

export function createFilmNodes(heroFilms: IFilm[], heroId: number, heroName: string) {
  const filmPositions = calculatePositions(heroFilms.length, 200, 100);

  const filmNodes = heroFilms.map((film, idx) => ({
    id: `film-${film.id}`,
    position: filmPositions[idx],
    data: { label: film.title },
  }));

  const heroNode = {
    id: `hero-${heroId}`,
    position: { x: 0, y: 0 },
    data: { label: heroName },
  };

  return [heroNode, ...filmNodes];
}

export function createStarshipNodes(heroStarships: IStarShip[]) {
  const starshipPositions = calculatePositions(heroStarships.length, 200, 300);

  return heroStarships.map((starship, idx) => ({
    id: `starship-${starship.id}`,
    position: starshipPositions[idx],
    data: { label: starship.name },
  }));
}
