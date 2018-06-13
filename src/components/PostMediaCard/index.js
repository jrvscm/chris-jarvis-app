import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import colors from '../../colors';

const styles = {
  button: {
    margin: 0,
    paddingRight: 0,
    paddingLeft: 0
  },
  actions: {
    justifyContent: `space-between`,
    paddingRight: 20,
    paddingLeft: 20
  },
  content: {
    borderBottom: `solid 1px ${colors.greyTwo}`
  },
  comment: {
    marginRight: 5
  },
  card: {
    maxWidth: 345,
    marginTop: 25,
    textAlign: `left`
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  date: {
    fontWeight: `bold`
  },
  para: {
    color: colors.textGrey
  }
};

  const PostMediaCard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.content}>
          <Typography component="h4" className={classes.date}>
            {props.date}
          </Typography>
          <Typography gutterBottom variant="headline" component="h2" color="secondary">
            {props.title}
          </Typography>
          <Typography component="p" className={classes.para}>
            {props.logline}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" color="secondary" className={classes.button}>
            <Icon className={classes.comment}>chat_bubble_outline</Icon> 25 comments
          </Button>
          <Button variant="fab" mini color="secondary" className={classes.button}>
            <Icon>arrow_forward</Icon>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PostMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostMediaCard);