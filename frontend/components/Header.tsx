import { List, ListItem, Grid, Button } from '@mui/material';
import React, { useContext } from 'react';
import styles from 'Styles/Header.module.css';
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
        <EventsLink link='/' className={styles.title}>
          B.Events
        </EventsLink>
        <Grid style={{ marginTop: 10 }}>
          <Search />
        </Grid>
      </Grid>
      <nav>
        <List className={styles.list}>
          <ListItem>
            <EventsLink link='/events' className={styles.regular}>
              Events
            </EventsLink>
          </ListItem>
          {user ? (
            <>
              <ListItem>
                <EventsLink link='/events/add' className={styles.regular}>
                  Add Event
                  <AddIcon style={{ color: '#fff', marginLeft: 5 }} />
                </EventsLink>
              </ListItem>
              <ListItem>
                <EventsLink
                  link='/account/dashboard'
                  className={styles.regular}
                >
                  Dashboard
                  <DashboardIcon style={{ color: '#fff', marginLeft: 5 }} />
                </EventsLink>
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
                <EventsLink
                  link='/account/login'
                  className={classNames(styles2.btn, styles2.btnHeader)}
                >
                  Login <LoginIcon style={{ color: '#fff', marginLeft: 5 }} />
                </EventsLink>
              </ListItem>
            </>
          )}
        </List>
      </nav>
    </header>
  );
};

export default Header;
