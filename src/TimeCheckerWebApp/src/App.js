import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Access from './components/access/';
import Admin from './components/admin';
import TimeClock from './components/timeClock/';
import { ACCESS, ADMIN, TIME_CLOCK } from './helpers/constants';
import ProtectedRoute from './components/_generic/protectedRoute';

function App() {
	return (
		<BrowserRouter basename='/'>
			<Switch>
				<Route exact path={ACCESS} component={Access} />
				<Route exact path={ADMIN} component={Admin} />
				<ProtectedRoute exact path={TIME_CLOCK} component={TimeClock} />
				<Redirect from='*' to="/" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
