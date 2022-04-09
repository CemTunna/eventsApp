import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Typography } from '@mui/material';
import { Event } from '../../typings';
import EventItem from 'Components/EventItem';
interface EventsPageProps {
  events: Event[];
}
const EventsPage: NextPage<EventsPageProps> = ({ events }) => {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && (
        <Typography variant='h3'>No events to show</Typography>
      )}
      {events.map((event) => (
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
