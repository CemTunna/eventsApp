import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import styles from 'Styles/DashboardEvent.module.css';
import { Grid } from '@mui/material';
import EventsLink from './eventsLink';
import { Event } from 'typings';

interface DashboardEventItemProps {
  event: Event;
  handleClickOpen: () => void;
  setId: (e: string) => void;
}
const DashboardEventItem: React.FC<DashboardEventItemProps> = ({
  event,
  handleClickOpen,
  setId,
}) => {
  return (
    <Grid>
      <Grid className={styles.item}>
        <EventsLink link={`/events/${event.slug}`}>{event.name}</EventsLink>
        <Grid className={styles.icons}>
          <EventsLink link={`/events/edit/${event.id}`}>
            <EditIcon className={styles.icon} />
          </EventsLink>
          <EventsLink
            onClick={() => {
              setId(event.id);
              handleClickOpen();
            }}
          >
            <ClearIcon className={styles.icon} />
          </EventsLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardEventItem;
