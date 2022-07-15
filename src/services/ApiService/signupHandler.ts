import { rest } from 'msw';

export const signupHandler = rest.post('/signup', (_, res, ctx) => {
  const randomValue = Math.random();

  if (randomValue < 0.25) return res(ctx.status(500, 'Unexpected error'), ctx.json({ errorCode: 'E005' }));

  if (randomValue < 0.5)
    return res(ctx.status(400, 'Error: user with this email already exists'), ctx.json({ errorCode: 'E234' }));

  return res(ctx.status(200));
});
