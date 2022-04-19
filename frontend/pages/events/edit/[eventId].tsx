import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import Layout from 'Components/layout/Layout';
import { useRouter } from 'next/router';
import styles from 'Styles/Form.module.css';
import EventsButton from 'Components/eventsButtonLink';
import Title from 'Components/Title';
import { Button, Grid, InputLabel, TextField } from '@mui/material';
import EventsInput from 'Components/Input';
import { GetServerSideProps } from 'next';
import { Event } from 'typings';
import moment from 'moment';
import SubTitle from 'Components/SubTitle';
import Image from 'next/image';
import CustomModal from 'Components/customModal';
import ImageUpload from 'Components/imageUpload';
import EventsLink from 'Components/eventsLink';
import { API_URL } from 'Config/index';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
interface EditEventPageProps {
  event: Event;
}
const EditEventPage: React.FC<EditEventPageProps> = ({ event }) => {
  const [values, setValues] = useState({
    name: event.name,
    performers: event.performers,
    venue: event.venue,
    address: event.address,
    date: event.date,
    time: event.time,
    description: event.description,
  });
  const [imgPreview, setImgPreview] = useState(
    event.image && event.image.formats.thumbnail.url
  );
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const isObjectEmpty = () => {
    return Object.values(values).some((element) => element === '');
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isObjectEmpty()) {
      toast.error('Plese fill all fields');
    }
    const res = await fetch(`${API_URL}/events/${event.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
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
  const imageUploaded = async () => {
    const res = await fetch(`${API_URL}/events/${event.id}`);
    const data = await res.json();
    setImgPreview(data.image.formats.thumbnail.url);
    setOpen(false);
  };
  return (
    <Layout title='Add New Event'>
      <EventsButton link='/events' className={styles.backBtn}>
        <ArrowBackIosNewIcon /> Go Back
      </EventsButton>
      <Title className={styles.title}>Edit Event</Title>
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
              value={moment(values.date).format('yyyy-MM-DD')}
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
            Update event
          </Button>
        </Grid>
      </form>
      <SubTitle> Event Image</SubTitle>
      {imgPreview ? (
        <Image src={imgPreview} height={150} width={250} />
      ) : (
        <Grid>
          <Title>No image uploaded</Title>
        </Grid>
      )}
      <Grid>
        <EventsLink className={styles.imgBtn} onClick={() => setOpen(true)}>
          Set Image
        </EventsLink>
      </Grid>
      <CustomModal
        handleOpen={() => setOpen(true)}
        open={open}
        handleClose={() => setOpen(false)}
        title={'asdasd'}
      >
        <ImageUpload id={event.id} imageUploaded={imageUploaded} />
      </CustomModal>
    </Layout>
  );
};

export default EditEventPage;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`${API_URL}/events/${params && params.eventId}`);
  const event = await res.json();
  return {
    props: {
      event,
    },
  };
};
