export interface IHeroesData {
  count: number;
  next: string;
  previous: any;
  results: IHeroe[];
}

export interface IHeroe {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: number;
  films: number[];
  species: number[];
  vehicles: number[];
  starships: number[];
  created: string;
  edited: string;
  url: string;
}

export interface IFilmData {
  count: number;
  next: string;
  previous: any;
  results: IFilm[];
}

export interface IFilm {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: number[];
  planets: number[];
  starships: number[];
  vehicles: number[];
  species: number[];
  created: string;
  edited: string;
  url: string;
}

export interface IStarshipData {
  count: number;
  next: string;
  previous: any;
  results: IStarShip[];
}

export interface IStarShip {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: any[];
  films: number[];
  created: string;
  edited: string;
  url: string;
}
