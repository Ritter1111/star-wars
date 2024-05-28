import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { mockFilms, mockHeroes, mockStarShip } from './mock_data';

global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const server = setupServer(
  rest.get('https://sw-api.starnavi.io/people', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockHeroes));
  }),
  rest.get('https://sw-api.starnavi.io/films', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFilms));
  }),
  rest.get('https://sw-api.starnavi.io/starships', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockStarShip));
  }),
);

export { server };
