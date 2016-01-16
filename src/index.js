import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
	<Provider store={store} >
		<Root history={browserHistory} />
	</Provider>,
  document.getElementById('root')
);
