import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import styles from 'Styles/DashboardEvent.module.css';
import { Grid } from '@mui/material';
import EventsLink from './eventsLink';
import { Event } from 'typings';
interface DashboardEventItemProps {
  event: Event;
}
const DashboardEventItem: React.FC<DashboardEventItemProps> = ({ event }) => {
  return (
    <Grid>
      <Grid className={styles.item}>
        <EventsLink link={`/events/${event.slug}`}>{event.name}</EventsLink>
      </Grid>
    </Grid>
  );
};

export default DashboardEventItem;
