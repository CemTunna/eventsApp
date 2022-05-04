import React from 'react';
import Image from 'next/image';
import styles2 from 'Styles/Link.module.css';
import styles from 'Styles/EventItem.module.css';
import { Event } from '../typings';
import { Grid, Typography } from '@mui/material';
import EventsLink from './EventsLink';
import classNames from 'classnames';
interface EventItemProps {
  event: Event;
}
const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <Grid className={styles.event}>
      <Grid className={styles.img}>
        <Image
          width={300}
          height={200}
          src={
            event.image
              ? event.image.formats.thumbnail.url
              : '/images/event-default.png'
          }
        />
      </Grid>
      <Grid style={{ marginBottom: '1rem' }}>
        <Grid className={styles.info}>
          <Typography variant='h6' style={{ marginLeft: '1rem' }}>
            {event.name}
          </Typography>
          <span>{new Date(event.date).toLocaleDateString('en-US')}</span>
          <Typography>
            <span style={{ marginRight: '0.2rem' }}>at</span> {event.time}
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <EventsLink
          className={classNames(styles2.btn, styles2.btnEvents)}
          link={`/events/${event.slug}`}
        >
          Details
        </EventsLink>
      </Grid>
    </Grid>
  );
};

export default EventItem;
