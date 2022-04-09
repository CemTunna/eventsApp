import React from 'react';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Event } from '../../typings';
import { GetServerSideProps } from 'next';
const EventPage: React.FC<Event> = () => {
  return <Layout></Layout>;
};

export default EventPage;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`${API_URL}/api/events/${query.eventSlug}`);
  const events = await res.json();

  return {
    props: {},
  };
};
