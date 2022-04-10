import React from 'react';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Event } from '../../typings';
import { GetStaticProps } from 'next';
import styles from 'Styles/Event.module.css';
import { Grid } from '@mui/material';
import EventsButton from 'Components/Button';
import Image from 'next/image';
const EventPage: React.FC<Event> = () => {
  return (
    <Layout>
      <Grid className={styles.event}>
        <Grid className={styles.controls}>
          <EventsButton> Edit</EventsButton>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default EventPage;
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${API_URL}/api/events/${params!.eventSlug}`);

  const events = await res.json();
  console.log('lll', events);

  return {
    props: {
      event: events[0],
    },
    revalidate: 1,
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt: Event) => ({
    params: {
      eventSlug: evt.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};
