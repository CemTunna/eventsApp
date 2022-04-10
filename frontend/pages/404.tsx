import React from 'react';
import Layout from 'Components/layout/Layout';
import styles from 'Styles/404.module.css';
import { Grid } from '@mui/material';
import Title from 'Components/Title';
import EventsButton from 'Components/Button';
const NotFoundPage = () => {
  return (
    <Layout title='Page Not Found'>
      <Grid className={styles.error}>
        <Title className={styles.text}>404</Title>
        <Title>There is nothing here</Title>
        <EventsButton link='/' className={styles.btn}>
          Go Back Home
        </EventsButton>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
