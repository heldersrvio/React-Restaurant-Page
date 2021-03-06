import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import './reset.css';
import './App.css';

const App = () => {
	return (
		<HashRouter basename="/">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/menu">
					<Menu />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default App;
