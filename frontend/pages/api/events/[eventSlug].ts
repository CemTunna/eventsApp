import type { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../../typings';
const { events } = require('./data.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const event = events.filter(
    (item: Event) => item.slug === req.query.eventSlug
  );
  if (req.method === 'GET') {
    res.status(200).json(event);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
