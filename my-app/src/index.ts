import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html('<h1>Hello..Aref</h1>')
})

export default app
