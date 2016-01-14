import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import One from './components/One';
import Two from './components/Two';

export default function getRoutes() {
  return (
	<Route path="/" component={App}>
		<Route path="step1" component={One} />
		<Route path="step2" component={Two} />
	</Route>
  );
}