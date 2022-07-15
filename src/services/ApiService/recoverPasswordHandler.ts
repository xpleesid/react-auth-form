import { rest } from 'msw';

export const recoverPasswordHandler = rest.put('/password/recover', (_, res, ctx) => {
  const randomValue = Math.random();

  if (randomValue < 0.5) return res(ctx.status(500, 'Unexpected error'), ctx.json({ errorCode: 'E005' }));

  return res(ctx.status(200));
});
