import React from 'react';
import Link from 'next/link';
import styles from 'Styles/Footer.module.css';
import { Grid, Typography } from '@mui/material';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography className={styles.text}>
        Copyright &copy; Events 2022
      </Typography>
      <Grid>
        <Link href='/about'>About</Link>
      </Grid>
    </footer>
  );
};

export default Footer;
