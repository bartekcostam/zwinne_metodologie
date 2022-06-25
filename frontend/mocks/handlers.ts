import { rest } from 'msw'

export const handlers = [
  rest.post('https://backend.dev/login', (req, res, ctx) => {
    // @ts-ignore
    const { email, password } = JSON.parse(req.body);

    if (email === 'stmazowiecki@gmail.com' && password === 'pass') {
      return res(
        ctx.status(200),
      )
    } else {
      return res(
        ctx.status(401),
      )
    }
  }),

]