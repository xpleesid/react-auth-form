import { rest } from 'msw';

export const loginHandler = rest.post('/signin', (_, res, ctx) => {
  const randomValue = Math.random();

  if (randomValue < 1) return res(ctx.status(500, 'Unexpected error'), ctx.json({ errorCode: 'E005' }));

  if (randomValue < 0.5) return res(ctx.status(400, 'Error: invalid credentials'), ctx.json({ errorCode: 'E078' }));

  return res(ctx.status(200));
});
