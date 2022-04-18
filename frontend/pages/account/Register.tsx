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

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match');
      return;
    }
  };
  return (
    <Layout title='Register'>
      <Grid className={styles.auth}>
        <Title>Register</Title>
        <PersonIcon style={{ color: '#fff' }} fontSize='large' />
        <ToastContainer />
        <Grid>
          <form onSubmit={handleSubmit}>
            <Grid>
              <InputLabel htmlFor='username'>Username </InputLabel>
              <EventsInput
                type={'text'}
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid>
              <InputLabel htmlFor='email'>Email Address</InputLabel>
              <EventsInput
                type={'email'}
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid>
              <InputLabel htmlFor='password'>Password </InputLabel>
              <EventsInput
                type={'password'}
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid>
              <InputLabel htmlFor='passwordConfirm'>
                Confirm Password{' '}
              </InputLabel>
              <EventsInput
                type={'password'}
                id='passwordConfirm'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Grid>
            <Button type='submit'>Login</Button>
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
