import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect, useContext } from 'react';
import Layout from 'Components/layout/Layout';
import styles from 'Styles/Auth.module.css';
import { Grid, InputLabel, Typography } from '@mui/material';
import Title from 'Components/Title';
import PersonIcon from '@mui/icons-material/Person';
import EventsInput from 'Components/EventsInput';
import Link from 'next/link';
import EventsLink from 'Components/EventsLink';
import AuthContext from 'Context/AuthContext';
import type { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const context = useContext(AuthContext);
  const { register, error } = context!;
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match');
      return;
    } else {
      register({ username, email, password, passwordConfirm });
    }
  };
  return (
    <Layout title='Register'>
      <Grid className={styles.auth}>
        <Grid
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Title>Register</Title>
          <PersonIcon
            style={{ color: '#fff', marginLeft: 10 }}
            fontSize='large'
          />{' '}
        </Grid>
        <ToastContainer />
        <Grid>
          <form onSubmit={handleSubmit}>
            <Grid>
              <InputLabel
                htmlFor='username'
                style={{ letterSpacing: ' 1px', color: '#553d67' }}
              >
                Username{' '}
              </InputLabel>
              <EventsInput
                className={styles.inpt}
                type={'text'}
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid>
              <InputLabel
                htmlFor='email'
                style={{ letterSpacing: ' 1px', color: '#553d67' }}
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
                htmlFor='password'
                style={{ letterSpacing: ' 1px', color: '#553d67' }}
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

            <Grid>
              <InputLabel
                htmlFor='passwordConfirm'
                style={{ letterSpacing: ' 1px', color: '#553d67' }}
              >
                Confirm Password{' '}
              </InputLabel>
              <EventsInput
                className={styles.inpt}
                type={'password'}
                id='passwordConfirm'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Grid>
            <EventsLink type='submit' className={styles.btn}>
              Register
            </EventsLink>
            <Typography>
              Already have an account ?<Link href='/account/login'>Login</Link>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default RegisterPage;
