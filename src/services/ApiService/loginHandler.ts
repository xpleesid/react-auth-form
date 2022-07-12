import { rest } from 'msw';

export const loginHandler = rest.post('/login', (_, res, ctx) => {
  const randomValue = Math.random();

  if (randomValue < 0.25) return res(ctx.status(500, 'Unexpected error'));

  if (randomValue < 0.5) return res(ctx.status(400, 'Error: invalid credentials'));

  return res(ctx.status(200));
});
