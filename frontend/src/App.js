import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInUp from "./SignInUp";
import Main from "./Main";
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
