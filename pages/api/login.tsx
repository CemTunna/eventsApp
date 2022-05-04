import { API_URL } from 'Config/index';
import cookie from 'cookie';
export default async (req: any, res: any) => {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;
    const backendRes = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await backendRes.json();

    if (backendRes.ok) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json({ user: data.user });
    } else {
      res.status(400).json({ message: 'Identifier or password invalid' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
