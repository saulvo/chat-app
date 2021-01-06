import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import googleIcon from "../../imgs/gg-icon.webp";
import React from "react";
import { Box } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	button: {
		background: "white",
    minWidth: "15rem",
    widows: '95%',
    height: "2.5rem",
    color: '#888',
    boxShadow: '0 0 1rem rgb(204 204 204 / 0.3)',
    display: 'block',
    margin: '5rem auto 10rem'

  },
  icon: {
    marginRight: '.5rem'
  }
}));
Signin.propTypes = {
  signinClick: PropTypes.func,
};

Signin.defaultProps  = {
  signinClick: null
}


function Signin({signinClick}) {
	const classes = useStyles();
	return (
		<Button className={classes.button} onClick={signinClick}>
			<Box display="flex" justifyContent="center">
				<img src={googleIcon} alt="signin with google" width="20" height="20" className={classes.icon}/>
				<Box>Signin with google</Box>
			</Box>
		</Button>
	);
}

export default Signin;
