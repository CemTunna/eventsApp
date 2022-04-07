import { List, ListItem, Grid } from '@mui/material';
import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
const Header = () => {
  return (
    <header className={styles.header}>
      <Grid className={styles.logo}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </Grid>
      <nav>
        <List className={styles.list}>
          <ListItem>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Header;
