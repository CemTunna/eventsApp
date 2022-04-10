import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Typography } from '@mui/material';
import { Event } from '../../typings';
import EventItem from 'Components/EventItem';
import Title from 'Components/Title';
interface EventsPageProps {
  events: Event[];
}
const EventsPage: NextPage<EventsPageProps> = ({ events }) => {
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

export default EventsPage;
export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events: events.slice(0, 4),
    },
  };
};
