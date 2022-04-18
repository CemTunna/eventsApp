import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect, useContext } from 'react';
import Layout from 'Components/layout/Layout';
import styles from 'Styles/Auth.module.css';
import {
  Button,
  Box,
  Modal,
  Grid,
  InputLabel,
  Typography,
} from '@mui/material';
import Title from 'Components/Title';
import PersonIcon from '@mui/icons-material/Person';
import EventsInput from 'Components/Input';
import EventsButton from 'Components/eventsButton';
import Link from 'next/link';
import EventsLink from 'Components/eventsLink';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <Layout title='Login'>
      <Grid className={styles.auth}>
        <Grid
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Title>Log In</Title>
          <PersonIcon
            style={{ color: '#fff', marginLeft: 10 }}
            fontSize='large'
          />
        </Grid>
        <ToastContainer />
        <Grid>
          <form onSubmit={handleSubmit}>
            <Grid>
              <InputLabel
                style={{ letterSpacing: ' 1px', color: '#553d67' }}
                htmlFor='email'
              >
                Email Address
              </InputLabel>
              <EventsInput
                className={styles.inpt}
                type={'email'}
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid>
              <InputLabel
                style={{ letterSpacing: ' 1px', color: '#553d67' }}
                htmlFor='password'
              >
                Password{' '}
              </InputLabel>
              <EventsInput
                className={styles.inpt}
                type={'password'}
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <EventsLink type='submit' className={styles.btn}>
              Login
            </EventsLink>
            <Typography>
              Don't have an account ?
              <Link href='/account/register'> Register</Link>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default LoginPage;
