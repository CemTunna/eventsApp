import { List, ListItem, Grid } from '@mui/material';
import React from 'react';
import styles from 'Styles/Header.module.css';
import Link from 'next/link';
import Search from './Search';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
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
              <a className={styles.regular}>
                Add Event
                <AddIcon style={{ color: '#fff', marginLeft: 5 }} />
              </a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/events'>
              <a className={styles.regular}>Events</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/account/login'>
              <a className={styles.login}>
                Login <LoginIcon style={{ color: '#fff', marginLeft: 5 }} />
              </a>
            </Link>
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Header;
