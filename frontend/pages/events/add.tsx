import React, { useState } from 'react';
import Layout from 'Components/layout/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from 'Config/index';
import styles from 'Styles/Form.module.css';
import EventsButton from 'Components/Button';
import Title from 'Components/Title';
import { Grid, Input, InputLabel } from '@mui/material';
const AddEventPage = () => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Layout title='Add New Event'>
      <EventsButton link='/events'>Go Back</EventsButton>
      <Title>Add Event</Title>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid className={styles.grid}>
          <Grid>
            <InputLabel htmlFor='name'>Event Name</InputLabel>
            <Input
              className={styles.inpt}
              value={values.name}
              onChange={handleInputChange}
              disableUnderline={true}
              type='text'
              id='name'
              name='name'
            />
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
};

export default AddEventPage;
