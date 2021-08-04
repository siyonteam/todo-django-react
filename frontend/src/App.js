import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import Main from "./components/Main";
import store from "./store";
function App() {
	const [callback, setCallback] = useState("");
	const callBackFuncion = (childData) => {
		setCallback(childData);
	};

	return (
		<Provider store={store}>
			<div className='App'>
				<Header parentCallback={callBackFuncion} />

				<Main searchValue={callback} />
			</div>
		</Provider>
	);
}

export default App;
