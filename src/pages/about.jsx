import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import '../styles/about.css';

const headingStyles = makeStyles(() => ({
  root: {
    gridColumn: '1 / 3',
    fontFamily: 'caveat',
    textDecoration: 'underline',
  },
}));

export default () => {
  const headingClasses = headingStyles();
  const aboutMeParagraphs = [
    {
      paragraph: "Hi! My name is Prasant and I'm a web developer.",
      key: 'paragraph-1',
    },
    {
      paragraph:
        "I recently graduated from the University of Waterloo with a Bachelor of Mathematics, majoring in Applied Mathematics. (Yes, I love mathematics that much). During my time as a student, I was enrolled in Waterloo's famed co-op program, completing a total of six co-op terms (an equivalent of 24 months). Despite my plan of pursuing post-graduate Mathematics, I specifically chose to complete my co-op terms in the Tech industry as I wanted to broaden my horizons, and keep my options open for the future.",
      key: 'paragraph-2',
    },
    {
      paragraph:
        "During my final two co-op terms, I worked as a web developer for the University of Waterloo. I learned the ropes on a team of seven developers and experienced every part of the development process. From sprint planning and writing quality code to testing features with QA and deploying version releases to production - and hundreds of other things in between. I even had the chance to work on a few big projects. During my first term I led a project to integrate an existing internal API with our web forms solution to prepopulate form results with student information. In my second term, I worked on our move from Drupal 7 to Drupal 8. By the end of my time there I had earned an 'Outstanding' evaluation from my supervisor. Unexpectedly, I had fallen in love with the profession, and given my aptitude for it, I decided that I wanted to do it full-time.",
      key: 'paragraph-3',
    },
    {
      paragraph:
        "Despite having spent five years in Waterloo, I was still very unwelcoming of the frigid winters and the boiling summers. So, having finished my degree, I moved back home to temperate (but also always raining) Vancouver. For the past year, I've been growing my skills by building full stack web applications with MongoDB, Express, React and Node. I'm current seeking full-time employment and I would love a role where I can continue to grow and gain experience with new technologies.",
      key: 'paragraph-4',
    },
    {
      paragraph:
        "When I'm not writing code, I enjoy playing video games and watching movies. I'm also nuts about soccer. To get in touch with me regarding employment opportunites, or if you just want to have a chat, reach out to me at prasant.prasath@hotmail.com",
      key: 'paragraph-5',
    },
  ];
  return (
    <Layout>
      <Container>
        <Typography
          variant="h1"
          component="h1"
          className={headingClasses.root}
          color="secondary"
          align="center"
          gutterBottom
        >
          About Me
        </Typography>
        <div id="about-me-grid">
          <img src="/images/portrait.jpg" id="portrait" alt="Prasant in Prague" />
          <Paper square>
            <div id="about">
              {aboutMeParagraphs.map((paragraphObj) => (
                <Typography variant="body1" component="p" paragraph key={paragraphObj.key}>
                  {paragraphObj.paragraph}
                </Typography>
              ))}
            </div>
          </Paper>
        </div>
      </Container>
    </Layout>
  );
};
