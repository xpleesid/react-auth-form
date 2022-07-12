import { rest } from 'msw';

export const resetPasswordHandler = rest.put('/password/reset', (_, res, ctx) => {
  const randomValue = Math.random();

  if (randomValue < 0.25) return res(ctx.status(500, 'Unexpected error'));

  if (randomValue < 0.5) return res(ctx.status(400, 'Error: provided code is incorrect'));

  return res(ctx.status(200));
});
