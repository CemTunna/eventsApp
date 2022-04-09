import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Typography } from '@mui/material';
import { Event } from '../typings';
import EventItem from 'Components/EventItem';
import EventsButton from 'Components/Button';
interface HomeProps {
  events: Event[];
}
const Home: NextPage<HomeProps> = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && (
        <Typography variant='h3'>No events to show</Typography>
      )}
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
      {events.length > 0 && (
        <EventsButton link='/events' className='btn-secondary'>
          View All Events
        </EventsButton>
      )}
    </Layout>
  );
};

export default Home;
export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
};
