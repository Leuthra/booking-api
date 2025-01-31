import { Hono } from 'hono'
import router from './routes/bookings';

const app = new Hono();

app.get('/', (c) => {
  return c.json({ author: 'Romi Muharom', status: 200, message: 'Welcome to Booking API' });
});

app.route('/api', router);

export default app
