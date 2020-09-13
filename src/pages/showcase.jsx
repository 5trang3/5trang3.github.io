import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../components/Layout';
import ShowcaseItem from '../components/ShowcaseItem';
import '../styles/showcase.css';

const showcaseData = [
  {
    title: 'Movie Genre Normalizer',
    image: '/images/movie-genre-normalizer.PNG',
    content: 'An app that displays normalized IMDB movie ratings based on genre averages.',
    chips: ['React', 'Node', 'Express', 'Mongoose', 'MongoDB', 'D3'],
    github: 'https://github.com/5trang3/movie-recommender',
    link: 'https://movie-genre-normalizer.herokuapp.com/',
  },
  {
    title: 'Scrabble Score Tracker',
    image: '/images/scrabble-score-tracker.PNG',
    content: 'An app that allows users to track scores for their game of Scrabble.',
    chips: ['React', 'Node', 'Material UI'],
    github: 'https://github.com/5trang3/scrabble-score-tracker',
    link: 'https://github.com/5trang3/scrabble-score-tracker',
  },
  {
    title: 'Portfolio',
    image: '/images/portfolio.PNG',
    content: 'My personal portfolio site.',
    chips: ['React', 'Node', 'Gatsby', 'Material UI'],
    github: 'https://github.com/5trang3/portfolio',
    link: 'https://github.com/5trang3/portfolio',
  },
  {
    title: 'React Calculator',
    image: '/images/js-calculator.PNG',
    content: 'A simple calculator built with React',
    chips: ['React', 'Node'],
    github: 'https://github.com/5trang3/js_calculator',
    link: 'https://github.com/5trang3/js_calculator',
  },
  {
    title: 'D3 Bar Chart',
    image: '/images/d3-bar-chart.PNG',
    content: 'A simple bar chart built with d3',
    chips: ['Javascript', 'HTML', 'CSS', 'D3'],
    github: 'https://github.com/5trang3/d3_bar_chart',
    link: 'https://github.com/5trang3/d3_bar_chart',
  },
];

export default () => {
  const showcaseItems = showcaseData.map((item) => (
    <ShowcaseItem
      title={item.title}
      img={item.image}
      content={item.content}
      chips={item.chips}
      githubLink={item.github}
      link={item.link}
    />
  ));
  return (
    <Layout>
      <Container>
        <div id="showcase-grid">{showcaseItems}</div>
      </Container>
    </Layout>
  );
};
