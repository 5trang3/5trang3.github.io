import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Container>
      <Typography variant="h3" component="h1" color="secondary" align="center">The page you are looking for cannot be found.</Typography>
    </Container>
  </Layout>
);
