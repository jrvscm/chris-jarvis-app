import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import colors from '../../colors';

const styles = {
  card: {
    maxWidth: 345,
    marginTop: 25,
    textAlign: `left`
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  about: {
    display: `flex`,
    flexDirection: `column`
  },
  column: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`
  },
  titleColumn: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    marginLeft: 10,
    color: colors.textGrey
  },
  titleRow: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    paddingLeft: 24,
    marginTop: -24
  },
  cardContainer:{
    marginTop: 0
  },
  titleH2: {
    fontWeight: `bold`,
  },
  titleH3: {
    fontWeight: `bold`
  }
};

const BioCard = (props) => {
  const { classes } = props;
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Chris Jarvis"
        />
        <div className={classes.titleRow}>
          <div className={classes.column}>
            <Avatar alt="Chris Jarvis" src="https://firebasestorage.googleapis.com/v0/b/chris-jarvis-app.appspot.com/o/profile-photo.jpg?alt=media&token=faff9c7d-d4d0-4d21-ab39-7c17e94bddb0" className={classes.avatar} />
          </div>
          <div className={classes.titleColumn}>
            <Typography component="h2" variant="subheading">
              Chris Jarvis
            </Typography>
            <Typography component="h2" variant="subheading">
              Full Stack Developer
            </Typography>
          </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            SideBar
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

BioCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BioCard);