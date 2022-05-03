import { ToastContainer, toast } from 'react-toastify';
import Layout from 'Components/layout/Layout';
import React from 'react';
import { parseCookies } from 'Helpers/index';
import { GetServerSideProps } from 'next';
import { API_URL } from 'Config/index';
import { Event } from 'typings';
import { Grid } from '@mui/material';
import Title from 'Components/Title';
import SubTitle from 'Components/SubTitle';
import DashboardEventItem from 'Components/DashboardEventItem';
import { useRouter } from 'next/router';
import Confirm from 'Components/Confirm';
import type { NextPage } from 'next';

interface DashboardPageInterface {
  events: Event[];
  token: string;
}
const DashboardPage: NextPage<DashboardPageInterface> = ({ events, token }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [id, setId] = React.useState<string>();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteEvent = async (id: string) => {
    const res = await fetch(`${API_URL}/events/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      toast.error(data.message);
    } else {
      router.reload();
    }
  };
  React.useMemo(() => {
    if (confirm) {
      deleteEvent(id!);
    }
    return () => {
      setConfirm(false);
    };
  }, [confirm, id]);

  return (
    <Layout title='Dashboard'>
      <Grid>
        <Title>Dashboard</Title>
        <SubTitle>My events</SubTitle>
        <Confirm
          open={open}
          handleClose={handleClose}
          setConfirm={setConfirm}
        />
        {events.map((item: Event) => (
          <DashboardEventItem
            key={item.id}
            event={item}
            handleClickOpen={handleClickOpen}
            setId={setId}
          />
        ))}
      </Grid>
    </Layout>
  );
};

export default DashboardPage;
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const events = await res.json();
  return {
    props: {
      events,
      token,
    },
  };
};
