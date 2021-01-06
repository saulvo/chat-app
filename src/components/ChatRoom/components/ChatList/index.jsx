import { Avatar, Box, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
ChatList.propTypes = {
	messages: PropTypes.array,
};

ChatList.defaultProps = {
	messages: [],
};

const useStyles = makeStyles({
	card: {
		display: "flex",
		marginBottom: ".5rem",
    padding: ".5rem",
    boxShadow: "0 0 5px rgb(0 0 0 / 0.1)"
  },
  userName: {
    fontSize: '.7rem',
    color: '#3f51b5'
	},
	current: {
		background: '#bde2ff'
	}
});

function ChatList({ messages, currentUser }) {
	const classes = useStyles();
	const uid = currentUser.uid;
	return (
		<Box mt={3}>
			{messages.map((mgs) => (
				<Card key={mgs.id} className={`${classes.card} ${(uid === mgs.uid) ? `${classes.current}` : ''}`}>
					<Avatar alt="Remy Sharp" src={mgs.photoURL} />
					<Box ml={2}>
						<Typography component="p" className={classes.userName}>{mgs.uname}</Typography>
						<Typography component="p">{mgs.text}</Typography>
					</Box>
				</Card>
			))}
		</Box>
	);
}

export default ChatList;
