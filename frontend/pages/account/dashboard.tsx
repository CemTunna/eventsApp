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
interface DashboardPageInterface {
  events: Event[];
  token: string;
}
const DashboardPage: React.FC<DashboardPageInterface> = ({ events, token }) => {
  const router = useRouter();
  const deleteEvent = async (id: string) => {
    if (confirm('Are you sure')) {
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
    }
  };
  return (
    <Layout title='Dashboard'>
      <Grid>
        <Title>Dashboard</Title>
        <SubTitle>My events</SubTitle>
        {events.map((item: Event) => (
          <DashboardEventItem
            key={item.id}
            event={item}
            handleDelete={deleteEvent}
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
