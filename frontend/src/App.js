import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SignInUp from "./components/login/SignInUp";
import Main from "./components/Main";
function App() {
	const [callback, setCallback] = useState("");
	const callBackFuncion = (childData) => {
		setCallback(childData);
	};

	return (
		<div className='App'>
			<Header parentCallback={callBackFuncion} />

			<Main />
		</div>
	);
}

export default App;
