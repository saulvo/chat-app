import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

Header.propTypes = {
  isLogged: PropTypes.bool,
  signoutClick: PropTypes.func,
};
Header.defaultProps  = {
  isLogged: false,
  signoutClick: null
}

function Header({isLogged, signoutClick}) {
  const classes = useStyles();
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <ChatBubbleIcon/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        CHAT APP
      </Typography>
      {isLogged && <Button color="inherit" onClick={signoutClick}>Sign out</Button>}
    </Toolbar>
  </AppBar>
  );
}

export default Header;