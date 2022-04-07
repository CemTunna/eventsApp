import React from 'react';
import Layout from 'Components/layout/Layout';
import styles from 'Styles/404.module.css';
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
const NotFoundPage = () => {
  return (
    <Layout title='Page Not Found'>
      <Grid className={styles.error}>
        <Typography variant='h1'>404</Typography>
        <Typography variant='h4'>There is nothing here</Typography>
        <Link href='/'>Go Back Home</Link>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
