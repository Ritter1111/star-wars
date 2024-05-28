import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { API_URL } from '@/constants';
import { mockFilms, mockHeroes, mockStarShip } from './mock_data';

global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const server = setupServer(
  rest.get(`${API_URL}/people`, (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    if (page === '1') {
      return res(ctx.status(200), ctx.json(mockHeroes));
    }
    return res(ctx.status(404), ctx.json({}));
  }),
  rest.get(`${API_URL}/people:id`, (req, res, ctx) => {
    const { id } = req.params;
    const hero = mockHeroes.results.find((h) => h.id.toString() === id);
    if (hero) {
      return res(ctx.status(200), ctx.json(hero));
    }
    return res(ctx.status(404), ctx.json({}));
  }),
  rest.get(`${API_URL}/films`, (req, res, ctx) => {
    const heroId = req.url.searchParams.get('characters__contains');
    const films = mockFilms.filter((film) => film.characters.includes(Number(heroId)));
    return res(ctx.status(200), ctx.json({ count: films.length, results: films }));
  }),
  rest.get(`${API_URL}/starships`, (req, res, ctx) => {
    const heroId = req.url.searchParams.get('pilots__contains');
    const starships = mockStarShip.filter((starship) => starship.pilots.includes(Number(heroId)));
    return res(ctx.status(200), ctx.json({ count: starships.length, results: starships }));
  }),
);

export { server };
