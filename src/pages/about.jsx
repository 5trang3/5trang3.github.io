import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';

import '../styles/about.css';

const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    justifyItems: 'center',
    alignItems: 'center',
  },
  paragraph: {
    marginTop: '10px',
    marginBottom: '10px',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.container}>
        <img src="/images/portrait.jpg" id="portrait" alt="Prasant in Prague" />
        <div id="about">
          <Typography
            variant="h5"
            component="p"
            align="justify"
            color="secondary"
            className={classes.paragraph}
          >
            My name is Prasant Prasath. I recently graduated from the University of Waterloo with a
            Bachelors of Mathematics, majoring in Applied Mathematics. (Yes, I love mathematics that
            much). If I learned anything from living in Waterloo for five years, it&apos;s that East
            Coast winters are not for me. So, Upon completion of my degree, I moved back home to
            Vancouver, where I now live.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            align="justify"
            color="secondary"
            className={classes.paragraph}
          >
            During my time as a student, I worked as a web developer for the University of Waterloo
            for a total of eight months. I created a module for the University that pre-populated
            student information in web forms. I was also heavily involved in the University&apos;s
            move from Drupal 7 to Drupal 8. I am currently seeking full time employment as a React
            Developer.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            align="justify"
            color="secondary"
            className={classes.paragraph}
          >
            When I&apos;m not writing code, I enjoy playing video games, watching movies and playing
            soccer. To get in touch with me regarding employment opportunites, reach out to me at
            prasant.prasath@hotmail.com
          </Typography>
        </div>
      </Container>
    </Layout>
  );
};
