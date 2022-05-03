import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import Layout from 'Components/layout/Layout';
import { useRouter } from 'next/router';
import { API_URL } from 'Config/index';
import styles from 'Styles/Form.module.css';
import styles2 from 'Styles/Link.module.css';
import Title from 'Components/Title';
import { Button, Grid, InputLabel, TextField } from '@mui/material';
import EventsInput from 'Components/EventsInput';
import { parseCookies } from 'Helpers/index';
import EventsLink from 'Components/EventsLink';
import classNames from 'classnames';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import type { NextPage } from 'next';

interface AddEventPageProps {
  token: string;
}
const AddEventPage: NextPage<AddEventPageProps> = ({ token }) => {
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
  });
  const router = useRouter();
  const isObjectEmpty = () => {
    return Object.values(values).some((element) => element === '');
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isObjectEmpty()) {
      toast.error('Plese fill all fields');
    }
    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error('Something went wrong');
    } else {
      const data = await res.json();
      router.push(`/events/${data.slug}`);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Layout title='Add New Event'>
      <EventsLink
        className={classNames(styles2.btn, styles2.btnActive)}
        link='/events'
      >
        <ArrowBackIosIcon style={{ marginRight: 10 }} /> Go Back
      </EventsLink>
      <Title className={styles.title}>Add Event</Title>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid className={styles.grid}>
          <Grid>
            <InputLabel htmlFor='name' style={{ color: '#f64c72' }}>
              Event Name
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.name}
              onChange={handleInputChange}
              type='text'
              id='name'
              name='name'
            />
          </Grid>

          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='performers'>
              Performers
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.performers}
              onChange={handleInputChange}
              type='text'
              id='performers'
              name='performers'
            />
          </Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='venue'>
              Venue
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.venue}
              onChange={handleInputChange}
              type='text'
              id='venue'
              name='venue'
            />
          </Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='address'>
              Address
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.address}
              onChange={handleInputChange}
              type='text'
              id='address'
              name='address'
            />
          </Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='date'>
              Date
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.date}
              onChange={handleInputChange}
              type='date'
              id='date'
              name='date'
            />
          </Grid>

          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='time'>
              Time
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.time}
              onChange={handleInputChange}
              type='text'
              id='time'
              name='time'
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='description'>
              Description
            </InputLabel>
            <TextField
              type='text'
              name='description'
              id='description'
              multiline
              style={{ width: '100%' }}
              minRows={5}
              value={values.description}
              onChange={handleInputChange}
              InputProps={{
                className: styles.area,
              }}
            />
          </Grid>

          <Button type='submit' className={styles.btn}>
            Add event
          </Button>
        </Grid>
      </form>
    </Layout>
  );
};

export default AddEventPage;

export const getServerSideProps = (context: any) => {
  const { req } = context;
  const { token } = parseCookies(req);
  return {
    props: {
      token,
    },
  };
};
