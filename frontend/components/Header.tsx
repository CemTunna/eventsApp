import { List, ListItem, Grid } from '@mui/material';
import React from 'react';
import styles from 'Styles/Header.module.css';
import Link from 'next/link';
import Search from './Search';
const Header = () => {
  return (
    <header className={styles.header}>
      <Grid className={styles.logo}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Search />
      </Grid>
      <nav>
        <List className={styles.list}>
          <ListItem>
            <Link href='/events/add'>
              <a>Add Even</a>
            </Link>
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
