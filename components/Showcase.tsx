import { Grid, Typography } from '@mui/material';
import React from 'react';
import styles from 'Styles/Showcase.module.css';
const Showcase = () => {
  return (
    <Grid className={styles.showcase}>
      <Typography variant='h1'>Welcome To The Party</Typography>
      <Typography variant='h2'>Find the hottest events</Typography>
    </Grid>
  );
};

export default Showcase;
