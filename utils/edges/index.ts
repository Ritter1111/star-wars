import { IFilm, IStarShip } from '@/types';

export function createFilmEdges(heroFilms: IFilm[], heroId: number) {
  return heroFilms.map((film) => ({
    id: `film-edge${film.id}`,
    source: `hero-${heroId}`,
    target: `film-${film.id}`,
    animated: true,
  }));
}

export function createStarshipEdges(heroFilms: IFilm[], heroStarships: IStarShip[]) {
  return heroStarships
    .map((starship) => {
      const film = heroFilms.find((currentFilm) => currentFilm.starships.includes(starship.id));
      return film
        ? {
            id: `starship-edge-${starship.id}`,
            source: `film-${film.id}`,
            target: `starship-${starship.id}`,
            animated: true,
          }
        : null;
    })
    .filter(Boolean);
}
