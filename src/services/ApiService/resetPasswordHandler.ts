import { rest } from 'msw';

export const resetPasswordHandler = rest.put('/password/reset', (_, res, ctx) => {
  const randomValue = Math.random();

  if (randomValue < 0.5) return res(ctx.status(500, 'Unexpected error'), ctx.json({ errorCode: 'E005' }));

  return res(ctx.status(200));
});
