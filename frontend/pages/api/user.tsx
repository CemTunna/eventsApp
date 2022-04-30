import { API_URL } from 'Config/index';
import cookie from 'cookie';
export default async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not Authoriezd' });
      return;
    }
    const { token } = cookie.parse(req.headers.cookie);
    const backendRes = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await backendRes.json();
    if (backendRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: 'User forbidden' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
