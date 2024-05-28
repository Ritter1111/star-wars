export const responseHeroData = {
  id: 1,
  name: 'Test Hero',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 1,
  films: [1, 2, 3, 6],
  species: [1],
  vehicles: [14, 30],
  starships: [12, 22],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://sw-api.starnavi.io/people/1/',
};

export const mockFilms = [
  {
    id: 1,
    title: 'Film 1',
    episode_id: 1,
    opening_crawl: 'Film_test_1',
    director: 'Film_director_1',
    producer: 'Rick McCallum',
    release_date: '2005-05-19',
    characters: [10],
    planets: [1],
    starships: [48],
    vehicles: [50],
    species: [15],
    created: '2014-12-20T18:49:38.403000Z',
    edited: '2014-12-20T20:47:52.073000Z',
    url: 'https://sw-api.starnavi.io/films/1/',
  },
  {
    id: 2,
    title: 'Film 2',
    episode_id: 2,
    opening_crawl: 'Film_test_2',
    director: 'Film_director_2',
    producer: 'Rick McCallum',
    release_date: '2005-05-19',
    characters: [10],
    planets: [1],
    starships: [48],
    vehicles: [50],
    species: [15],
    created: '2014-12-20T18:49:38.403000Z',
    edited: '2014-12-20T20:47:52.073000Z',
    url: 'https://sw-api.starnavi.io/films/1/',
  },
];

export const mockStarShip = [
  {
    id: 48,
    name: 'Jedi starfighter',
    model: 'Delta-7',
    manufacturer: 'Kuat Systems Engineering',
    cost_in_credits: '180000',
    length: '8',
    max_atmosphering_speed: '1150',
    crew: '1',
    passengers: '0',
    cargo_capacity: '60',
    consumables: '7 days',
    hyperdrive_rating: '1.0',
    MGLT: 'unknown',
    starship_class: 'Starfighter',
    pilots: [10, 58],
    films: [5, 6],
    created: '2014-12-20T17:35:23.906000Z',
    edited: '2014-12-20T21:23:49.930000Z',
    url: 'https://sw-api.starnavi.io/starships/48/',
  },
];

// export const responseFilmMockData = {
//   id: 1,
//   title: 'Film 1',
//   episode_id: 1,
//   opening_crawl: 'Film_test_1',
//   director: 'Film_director_1',
//   producer: 'Rick McCallum',
//   release_date: '2005-05-19',
//   characters: [10],
//   planets: [1],
//   starships: [48],
//   vehicles: [50],
//   species: [15],
//   created: '2014-12-20T18:49:38.403000Z',
//   edited: '2014-12-20T20:47:52.073000Z',
//   url: 'https://sw-api.starnavi.io/films/1/',
// };

export const mockHeroes = {
  count: 2,
  next: '',
  previous: null,
  results: [
    {
      id: 1,
      name: 'Hero One',
      height: '180',
      mass: '80',
      hair_color: 'black',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '1990',
      gender: 'male',
      homeworld: 1,
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '',
      edited: '',
      url: '',
    },
    {
      id: 2,
      name: 'Hero Two',
      height: '170',
      mass: '70',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'green',
      birth_year: '1985',
      gender: 'female',
      homeworld: 2,
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: '',
      edited: '',
      url: '',
    },
  ],
};
