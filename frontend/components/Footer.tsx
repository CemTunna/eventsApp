import React from 'react';
import styles from 'Styles/Footer.module.css';
import { Grid, Typography } from '@mui/material';
import EventsButton from './eventsLink';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography style={{ color: '#fff' }}>
        Copyright &copy; Events 2022
      </Typography>
      <Grid>
        <EventsButton link='/about' className={styles.link}>
          About
        </EventsButton>
      </Grid>
    </footer>
  );
};

export default Footer;
