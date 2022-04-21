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
interface DashboardPageInterface {
  events: Event[];
}
const DashboardPage: React.FC<DashboardPageInterface> = ({ events }) => {
  console.log(events);
  return (
    <Layout title='Dashboard'>
      <Grid>
        <Title>Dashboard</Title>
        <SubTitle>My events</SubTitle>
        {events.map((item: Event) => (
          <DashboardEventItem event={item} />
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
    },
  };
};
