import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'Styles/EventItem.module.css';
import { Event } from '../typings';
import { Grid, Typography } from '@mui/material';
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
          src={event.image ? event.image : '/images/event-default.png'}
        />
      </Grid>
      <Grid className={styles.info}>
        <span>{event.date}</span> at {event.time}
        <Typography variant='h6'>{event.name}</Typography>
      </Grid>
      <Grid>
          
      </Grid>
    </Grid>
  );
};

export default EventItem;
