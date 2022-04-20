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
  //   register
  const register = async (user) => {
    console.log(user);
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
    console.log('ll', res);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      console.log('lll', data);
    } else {
      setError(data.message);
    }
  };
  //   logout
  const logout = async () => {
    console.log('logout');
  };
  //   check if user logged in
  const checkUserLoggedIn = async (user) => {
    console.log('Check');
  };
  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
