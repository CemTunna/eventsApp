import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Event } from '../typings';
import EventItem from 'Components/EventItem';
import Title from 'Components/Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventsLink from 'Components/EventsLink';
import classNames from 'classnames';
import styles from 'Styles/Link.module.css';
import styles2 from 'Styles/Events.module.css';
import { Grid } from '@mui/material';
interface HomeProps {
  events: Event[];
}
const Home: NextPage<HomeProps> = ({ events }) => {
  return (
    <Layout title='Home'>
      <Title>Upcoming Events</Title>
      {events.length === 0 && <Title>No events to show</Title>}
      <Grid
        style={{ display: 'flex', flexWrap: 'wrap' }}
        className={styles2.container}
      >
        {events.map((event: Event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </Grid>
      {events.length > 0 && (
        <EventsLink
          link='/events'
          className={classNames(styles.btn, styles.btnActive2)}
        >
          View All Events <ArrowForwardIosIcon style={{ marginLeft: 10 }} />
        </EventsLink>
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
