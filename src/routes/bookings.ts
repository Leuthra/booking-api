import { Hono } from 'hono';
import { pool } from '../db';
import { Booking } from '../types';

const router = new Hono();

router.post('/bookings', async (c) => {
  const body = await c.req.json<Booking>();

  const { name, phone, date, time, people } = body;
  if (!name || !phone || !date || !time || !people) {
    return c.json({ author: 'Romi Muharom', status: 400, message: 'you need add body (name, phone, date, time, people)' }, 400);
  }

  const [result] = await pool.execute(
    'INSERT INTO bookings (name, phone, date, time, people) VALUES (?, ?, ?, ?, ?)',
    [name, phone, date, time, people]
  );

  return c.json({ author: 'Romi Muharom', status: 201, message: 'Booking created', id: (result as any).insertId, ...body }, 201);
});

router.get('/bookings', async (c) => {
  const [rows] = await pool.query('SELECT * FROM bookings');
  return c.json({ author: 'Romi Muharom', status: 200, message: 'List of bookings', data: rows }, 200);
});

router.get('/bookings/:id', async (c) => {
  const id = c.req.param('id');
  const rows = await pool.query('SELECT * FROM bookings WHERE id = ?', [id]);
    if (!rows.length) {
        return c.json({ author: 'Romi Muharom', status: 404, message: 'Booking not found' }, 404);
    }

    return c.json({ author: 'Romi Muharom', status: 200, message: 'Booking detail', data: rows[0] }, 200);
});

router.put('/bookings/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json<Booking>();
  const { name, phone, date, time, people } = body;

  await pool.execute(
    'UPDATE bookings SET name = ?, phone = ?, date = ?, time = ?, people = ? WHERE id = ?',
    [name, phone, date, time, people, id]
  );

    return c.json({ author: 'Romi Muharom', status: 200, message: 'Booking updated', id, ...body }, 200);
});

router.delete('/bookings/:id', async (c) => {
  const id = c.req.param('id');
  await pool.execute('DELETE FROM bookings WHERE id = ?', [id]);
  return c.json({ author: 'Romi Muharom', status: 200, message: 'Booking deleted', id }, 200);
});

export default router;
