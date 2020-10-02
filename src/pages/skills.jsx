import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import SkillsAccordion from '../components/SkillsAccordion';

export default () => {
  const skills = [
    {
      icon: 'html',
      description:
        'I began my journey in web development writing index.html files with nothing but plain HTML. Then, when I had a good grasp of CSS and JS, I moved on to writing HTML with Bootstrap. Later, at my first web development job, we used Drupal, so I learned how to write HTML with PHP templates. Nowadays, however, I write all of my HTML with React and use Material-UI as my favoured component library.',
    },
    {
      icon: 'css',
      description:
        'I learned CSS shortly after I began learning HTML, writing plain CSS files to style my static web pages. Later on, at my first web development job, I learned to use Sass as a preprocessor and Gulp to minify the outputted files. Nowadays however, my use of Material-UI as a component library means I use its CSS-in-JS styling solution to write most of my CSS.',
    },
    {
      icon: 'js',
      description:
        'Like many developers, I began learning JavaScript when I wanted to add dynamic content to my boring static HTML and CSS web pages. My first foray into this was with JQuery, which at the time was the most popular JS library for the frontend. By the time I had begun my first job however, JS had become just as popular on the backend, so I began to learn and use Node as well. After graduation, I discovered React, which has slowly become my choice of framework for just about any project.',
    },
    {
      icon: 'php',
      description:
        'Unlike the other languages I know, I only encountered PHP for the first time at my first job as a web developer. There, we used Drupal, a CMS written extensively in PHP. Naturally, I learned the language during my time there and used it to develop Drupal modules, style our Drupal sites, and even interact with MySQL on the backend.',
    },
    {
      icon: 'react',
      description:
        'I began my foray into React development shortly after my graduation. I had decided that I did not enjoy the Drupal development that I did during my final co-op term and I began looking for alternative opportunities. I found that there were plently of React jobs on the market, so I started looking into it. Slowly I began accumulating React knowledge - from components and state to lifecycle methods and hooks - and using it in personal projects. I began to really appreciate the nuances of React, and I decided that I wanted to pursue React development professionally.',
    },
    {
      icon: 'sass',
      description:
        'I used Sass during my time as a web developer for the University of Waterloo. There, I learned to appreciate its use with large and complex projects as its features such as variables, nesting, modules and mixins, all lend a hand in simplifying large amounts of css.',
    },
    {
      icon: 'node',
      description:
        'Again, my first experience with Node was at my first job. Prior to that, I had no idea about its nearly infinite utility. There, I learned about package management and npm, which opened my eyes up to a whole new world of possibilities. Later, I learned about more complex uses of Node, such as writing Node scripts to parse large data files or populate databases.',
    },
    {
      icon: 'express',
      description:
        'I only started using Express in the last year, when I began building full stack applications. I use Express to create routes server-side and when users access those routes, they receive a JSON object that contains the data they requested. Using Node, Express and MongoDB I can create REST APIs. ',
    },
    {
      icon: 'mongodb',
      description:
        'MongoDB is one of the more popular NoSQL databases that have recently become all the rage. Since MongoDB is schemaless it allows much greater flexibility when it comes to storing data which has seen it become widely adopted. I used it along with Mongoose and Express to build backend APIs.',
    },
    {
      icon: 'd3',
      description:
        'D3 is a Javascript library that is most commonly used to build data representations such as charts. However, I have been using D3 in my projects to analyze large datasets and perform interpolation and aggregation. In my Movie Rating Normalizer app, I used D3 to calculated normalized ratings for movies based on genre distributions.',
    },
    {
      icon: 'git',
      description:
        "Git is the most popular version control system in use today by a mile. I started using it at my first job. Prior to that, I did not even know that version control was a thing! Nowadays, I wouldn't dream of creating a project without version control.",
    },
    {
      icon: 'github',
      description:
        "Github is the world's most used Git repository hosting service and nearly every open source project in the world is hosted on github. I actually used Gitlab during my first job, but I currently use Github for all my personal projects.",
    },
    {
      icon: 'drupal',
      description:
        "Drupal is an open source CMS (Content Management System), second in popularity only to Wordpress. I worked with Drupal extensively as a Web Developer with the University of Waterloo. Almost 95% of the University's sites run on Drupal. My role there involved creating, modifying, and testing Drupal sites and modules as well helping the University move from Drupal 7 to Drupal 8",
    },
  ];
  const containerStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
  const headerStyles = makeStyles({
    root: {
      gridColumn: '1 / 3',
      fontFamily: 'caveat',
      textDecoration: 'underline',
    },
  });
  const containerClasses = containerStyles();
  const headerClasses = headerStyles();
  return (
    <Layout>
      <Container className={containerClasses.root}>
        <Typography variant="h1" color="secondary" className={headerClasses.root} gutterBottom>
          My Skills
        </Typography>
        <SkillsAccordion skills={skills} />
      </Container>
    </Layout>
  );
};
