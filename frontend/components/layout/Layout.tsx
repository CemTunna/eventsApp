import React from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import styles from 'Styles/Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';
interface LayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <Grid>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={
            !description ? 'Find the latest and hottest parties' : description
          }
        />
        <meta
          name='keywords'
          content={!keywords ? 'events, parties' : keywords}
        />
      </Head>
      <Header />
      <Grid className={styles.container}>{children}</Grid>
      <Footer />
    </Grid>
  );
};

export default Layout;
