import PropTypes from "prop-types";
import React from "react";
import ChatForm from "./components/ChatForm";
import ChatList from "./components/ChatList";

ChatRoom.propTypes = {
	messages: PropTypes.array,
	sendMessage: PropTypes.func,
};
ChatRoom.defaultProps = {
	messages: [],
	sendMessage: null
};

function ChatRoom({ messages, sendMessage, user }) {
	return (
		<>
			<ChatList messages={messages} currentUser = {user}/>
			<ChatForm onSubmit={sendMessage} />
		</>
	);
}

export default ChatRoom;
