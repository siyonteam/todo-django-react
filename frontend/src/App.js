import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header";

import Main from "./components/Main";
function App() {
	const [callback, setCallback] = useState("");
	const callBackFuncion = (childData) => {
		setCallback(childData);
	};

	return (
		<div className='App'>
			<Header parentCallback={callBackFuncion} />

			<Main searchValue={callback} />
		</div>
	);
}

export default App;
