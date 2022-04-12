import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Typography } from '@mui/material';
import { Event } from '../../typings';
import EventItem from 'Components/EventItem';
import Title from 'Components/Title';
import { GetServerSideProps } from 'next';
import qs from 'qs';

interface SearchPageProps {
  events: Event[];
}
const SearchPage: NextPage<SearchPageProps> = ({ events }) => {
  return (
    <Layout>
      {events.length === 0 ? (
        <Title>No events to show</Title>
      ) : (
        <Title>Events</Title>
      )}
      {events.map((event: Event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Layout>
  );
};

export default SearchPage;
export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
};
