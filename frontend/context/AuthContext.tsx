import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from 'Config/index';
interface AuthContextInterface {}
interface ProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextInterface | null>(null);
export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    checkUserLoggedIn();
  }, []);
  //   register
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
    }
  };
  //   login
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/events');
    } else {
      setError(data.message);
    }
  };
  //   logout
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    });
    if (res.ok) {
      setUser(null);
      router.push('/');
    }
  };
  //   check if user logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    console.log('checked');
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };
  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
