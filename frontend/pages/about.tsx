import { Grid, Typography } from '@mui/material';
import React from 'react';
import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';

const AboutPage: NextPage = () => {
  return (
    <Layout title='About events'>
      <Grid>
        <Typography variant='h1'>About</Typography>
        <Typography variant='h5'>
          This is an app to find latest events
        </Typography>
        <Typography variant='h5'>Version 1.0.0</Typography>
      </Grid>
    </Layout>
  );
};

export default AboutPage;
