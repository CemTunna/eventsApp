import { List, ListItem, Grid, Button } from '@mui/material';
import React, { useContext } from 'react';
import styles from 'Styles/Header.module.css';
import Link from 'next/link';
import Search from './Search';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import AuthContext from 'Context/AuthContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import EventsLink from './eventsLink';
import styles2 from 'Styles/Link.module.css';
import classNames from 'classnames';
const Header = () => {
  const { user, logout } = useContext(AuthContext);
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
            <Link href='/events'>
              <a className={styles.regular}>Events</a>
            </Link>
          </ListItem>
          {user ? (
            <>
              <ListItem>
                <Link href='/events/add'>
                  <a className={styles.regular}>
                    Add Event
                    <AddIcon style={{ color: '#fff', marginLeft: 5 }} />
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='/account/dashboard'>
                  <a className={styles.regular}>
                    Dashboard
                    <DashboardIcon style={{ color: '#fff', marginLeft: 5 }} />
                  </a>
                </Link>
              </ListItem>
              <ListItem>
                <EventsLink
                  onClick={() => logout()}
                  className={classNames(styles2.btn, styles2.btnHeader)}
                >
                  Logout
                  <LogoutIcon style={{ color: '#fff', marginLeft: 5 }} />
                </EventsLink>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem>
                <Link href='/account/login'>
                  <a className={styles.login}>
                    Login <LoginIcon style={{ color: '#fff', marginLeft: 5 }} />
                  </a>
                </Link>
              </ListItem>
            </>
          )}
        </List>
      </nav>
    </header>
  );
};

export default Header;
