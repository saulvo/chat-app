import { Container } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatRoom from "./components/ChatRoom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signin from "./components/Signin";

firebase.initializeApp({
	apiKey: "AIzaSyD6al_aunfJT8XHhmSQKfKo9fPtvk5c4io",
	authDomain: "my-app-4953b.firebaseapp.com",
	databaseURL: "https://my-app-4953b.firebaseio.com",
	projectId: "my-app-4953b",
	storageBucket: "my-app-4953b.appspot.com",
	messagingSenderId: "983064847986",
	appId: "1:983064847986:web:029ed5ceb281706aecc4eb",
	measurementId: "G-KNFFM9EDW0",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const handleSignInClick = () => {
	try {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	} catch (error) {
		console.log("Loggin fail...", error);
	}
};
const handleSignOutClick = () => auth.signOut();

function App() {
	const [user] = useAuthState(auth);

	const messagesRef = firestore.collection("messages");
	const query = messagesRef.orderBy("createdAt").limit(25);
	const [messages] = useCollectionData(query, { idField: "id" });

	const sendMessage = async (formValue) => {
		const { uid, photoURL, displayName } = auth.currentUser;
		await messagesRef.add({
			text: formValue.message,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
			uname: displayName,
		});
	};

	return (
		<>
			<Header isLogged={!!user} signoutClick={handleSignOutClick} />
			<Container fixed>
				{!user && <Signin signinClick={handleSignInClick} />}
				{user && (
					<ChatRoom messages={messages} sendMessage={sendMessage} user={user} />
				)}
			</Container>
			<Footer />
		</>
	);
}

export default App;
