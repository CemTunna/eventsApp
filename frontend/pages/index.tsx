import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Typography } from '@mui/material';
import { Event } from '../typings';
import EventItem from 'Components/EventItem';
import EventsButton from 'Components/eventsButton';
import Title from 'Components/Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface HomeProps {
  events: Event[];
}
const Home: NextPage<HomeProps> = ({ events }) => {
  return (
    <Layout>
      <Title>Upcoming Events</Title>
      {events.length === 0 && (
        <Typography variant='h3'>No events to show</Typography>
      )}
      {events.map((event: Event) => (
        <EventItem key={event.id} event={event} />
      ))}
      {events.length > 0 && (
        <EventsButton link='/events'>
          View All Events <ArrowForwardIosIcon style={{ marginLeft: 20 }} />
        </EventsButton>
      )}
    </Layout>
  );
};

export default Home;
export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
};
