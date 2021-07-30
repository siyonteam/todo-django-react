import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInUp from "./components/SignInUp";
import Main from "./components/Main";
function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/account'>
						<SignInUp />
					</Route>
					<Route path='/'>
						<Main />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
