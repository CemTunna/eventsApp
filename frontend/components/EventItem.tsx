import React from 'react';
import Image from 'next/image';
import styles from 'Styles/EventItem.module.css';
import { Event } from '../typings';
import { Grid, Typography } from '@mui/material';
import EventsButton from './Button';
interface EventItemProps {
  event: Event;
}
const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <Grid className={styles.event}>
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
      <Grid className={styles.link}>
        <EventsButton link={`/events/${event.slug}`} className='btn'>
          Details
        </EventsButton>
      </Grid>
    </Grid>
  );
};

export default EventItem;