import "./App.scss";
import React from "react";
import Header from "./components/Header";
import SignInUp from "./components/login/SignInUp";
import Main from "./components/Main";
function App() {
	return (
		<div className='App'>
			<Header />

			<SignInUp />

			<Main />
		</div>
	);
}

export default App;
