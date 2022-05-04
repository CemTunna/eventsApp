import 'Styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'Context/AuthContext';
function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles!.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
