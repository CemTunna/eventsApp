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
      <Grid>
        <Grid className={styles.img}>
          <Image
            width={170}
            height={100}
            src={
              event.image
                ? event.image.formats.thumbnail.url
                : '/images/event-default.png'
            }
          />
        </Grid>
        <Grid className={styles.info}>
          <span>{new Date(event.date).toLocaleDateString('en-US')}</span> at{' '}
          {event.time}
          <Typography variant='h6'>{event.name}</Typography>
        </Grid>
      </Grid>
      <Grid className={styles.link}>
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
