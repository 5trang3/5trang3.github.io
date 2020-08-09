import React from "react"
import Header from '../components/header.js'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import Portrait from '../images/portrait.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    justifyItems: 'center'
  },
}))
export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <Container className={ classes.container }>
          <Typography variant='h1' gutterBottom>Hi, My name is Prasant Prasath, and I am a Full stack developer</Typography>
          <img src={ Portrait } alt='A picture of Prasant' id='portrait'></img>
      </Container>
    </div>
  )
}
