import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    height: '100%',
  },
  h1: {
    fontFamily: 'caveat',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.container}>
        <Typography
          variant="h1"
          color="secondary"
          id="heading"
          align="center"
          className={classes.h1}
        >
          Unleash your creativity.
        </Typography>
        <Typography variant="h2" color="secondary" id="blurb" align="center">
          Hi, My name is Prasant and I make ideas come alive.
        </Typography>
        <Typography variant="h4" component="p" color="secondary" id="description" align="center">
          I use React to build innovative and functional web apps.
        </Typography>
      </Container>
    </Layout>
  );
}
