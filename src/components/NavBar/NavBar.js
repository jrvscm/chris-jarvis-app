import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Pattern from '../../images/cool-pattern.png';

import colors from '../../colors';

const styles = {
	hero: {
		height: 200,
		width: `100%`,
		background: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/cool-pattern.png) center center no-repeat`,
		backgroundSize: `cover`
	},
  logo: {
    height: 42,
    width: 42,
    borderRadius: `50%`,
    background: `url(https://firebasestorage.googleapis.com/v0/b/chris-jarvis-app.appspot.com/o/profile-photo.jpg?alt=media&token=faff9c7d-d4d0-4d21-ab39-7c17e94bddb0) center center`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    border: `1px solid ${colors.themeOrange}`
  },
  bar: {
    backgroundColor: colors.themeBlue
  },
  root: {
    flexGrow: 1,
    width: `100%`,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const MenuBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            CMJ
          </Typography>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Blog</Button>
          <div className={classes.logo} />
        </Toolbar>
      </AppBar>
      <div className={classes.hero} />
    </div>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);