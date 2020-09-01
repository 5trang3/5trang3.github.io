import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container'
import '../styles/components/showcaseItem.css'
import Button from './button.js'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '80% 20%',
    gridTemplateRows: '20% 55% 25%',
  },
  cardHeader: {
    gridColumn: '1 / 2'
  },
  cardActions: {
    gridColumn: '2 / 3'
  },
  cardMedia: {
    gridColumn: '1 / 3'
  },
  cardContent: {
    gridColumn: '1 / 3',
    display: 'grid',
    gridTemplateRows: '66% 33%',
    rowGap: '10px',
  },
  chip: {
    marginRight: '5px',
  }
}))

export default (props) => {
  const classes = useStyles();
  const chips = props.chips.map((chip) => <Chip label={ chip } size='small' className={ classes.chip }></Chip>)

  return (
    <div>
      <a href={ props.link } class='showcase-link'>
      <Card className={ classes.card }>
        <CardHeader title={ props.title } className={ classes.cardHeader }>
        </CardHeader>
        <CardActions className={ classes.cardActions }>
          <a href={ props.githubLink }>
            <Button buttonName='github' buttonColor='primary' textColor='#00578e'></Button>
          </a>
        </CardActions>
        <CardMedia image={ props.img } className={ classes.cardMedia }>
        </CardMedia>
        <CardContent className={ classes.cardContent }>
         <Typography className={ classes.description } variant='body2'>
          { props.content }
         </Typography>
         <div class='chip-container'>
           { chips }
         </div>
        </CardContent>
      </Card>
      </a>
    </div>
  )
}
