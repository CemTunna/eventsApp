import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL, PER_PAGE } from 'Config/index';
import { Event } from '../../typings';
import EventItem from 'Components/EventItem';
import Title from 'Components/Title';
import Pagination from 'Components/Pagination';
import { Grid } from '@mui/material';
import styles from 'Styles/Events.module.css';
interface EventsPageProps {
  events: Event[];
  total: number;
  page: number;
}
const EventsPage: NextPage<EventsPageProps> = ({ events, total, page }) => {
  return (
    <Layout>
      {events.length === 0 ? (
        <Title>No events to show</Title>
      ) : (
        <Title>Events</Title>
      )}
      <Grid className={styles.container}>
        {events.map((event: Event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </Grid>
      <Pagination page={page} total={total} />
    </Layout>
  );
};

export default EventsPage;
export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // fetch total
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return {
    props: {
      events,
      page: +page,
      total,
    },
  };
};
