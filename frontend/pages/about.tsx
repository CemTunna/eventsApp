import { Grid, Typography } from '@mui/material';
import React from 'react';
import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import Title from 'Components/Title';
import SubTitle from 'Components/SubTitle';
import Text from 'Components/Text';

const AboutPage: NextPage = () => {
  return (
    <Layout title='About events'>
      <Grid>
        <Title size='h1'>About</Title>
        <SubTitle>This is an app to find latest events</SubTitle>
        <Text>Version 1.0.0</Text>
      </Grid>
    </Layout>
  );
};

export default AboutPage;
