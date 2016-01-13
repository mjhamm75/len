import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/app';
import One from './components/One';
import Two from './components/Two';

let router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="step1" component={One} />
			<Route path="step2" component={Two} />
		</Route>
	</Router>
)

ReactDOM.render(
  router,
  document.getElementById('app')
);