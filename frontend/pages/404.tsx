import React from 'react';
import Layout from 'Components/layout/Layout';
import styles from 'Styles/Link.module.css';
import { Grid } from '@mui/material';
import Title from 'Components/Title';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventsLink from 'Components/EventsLink';
import classNames from 'classnames';
import styles2 from 'Styles/404.module.css';
import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Layout title='Page Not Found'>
      <Grid className={styles.error}>
        <Title className={styles.text}>404</Title>
        <Title>There is nothing here</Title>
        <EventsLink link='/' className={classNames(styles.btn, styles2.btn)}>
          <ArrowBackIosIcon /> Go Back Home
        </EventsLink>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
