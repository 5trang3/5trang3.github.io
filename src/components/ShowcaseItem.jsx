import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import '../styles/components/showcaseItem.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from './CustomButton';

const useStyles = makeStyles(() => ({
  card: {
    height: '340px',
    width: '340px',
    display: 'grid',
    gridTemplateColumns: '80% 20%',
    gridTemplateRows: '15% 45% 40%',
  },
  cardHeader: {
    gridColumn: '1 / 2',
  },
  cardActions: {
    gridColumn: '2 / 3',
  },
  cardMedia: {
    gridColumn: '1 / 3',
  },
  cardContent: {
    padding: '10px 15px',
    gridColumn: '1/3',
    '&:last-child': {
      paddingBottom: '10px',
    },
  },
  chip: {
    marginRight: '5px',
    marginBottom: '5px',
  },
}));

const ShowcaseItem = ({
  chips, link, title, githubLink, img, content,
}) => {
  const classes = useStyles();
  const chipList = chips.map((chip) => (
    <Chip label={chip} size="small" className={classes.chip} key={`${chip}-chip`} />
  ));

  return (
    <div id="item-container">
      <Card className={classes.card}>
        <a href={link} className="showcase-link">
          <CardHeader
            title={title}
            className={classes.cardHeader}
            titleTypographyProps={{ color: 'textPrimary', variant: 'h6' }}
          />
        </a>
        <CardActions className={classes.cardActions}>
          <a href={githubLink}>
            <Button buttonName="github" buttonColor="primary" textColor="#00578e" />
          </a>
        </CardActions>
        <CardMedia image={img} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.description} variant="body2" paragraph>
            {content}
          </Typography>
          <div className="chip-container">{chipList}</div>
        </CardContent>
      </Card>
    </div>
  );
};

ShowcaseItem.propTypes = {
  chips: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ShowcaseItem;
