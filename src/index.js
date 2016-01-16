import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createHistory } from 'history';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const history = createHistory();
const store = configureStore();

render(
	<Provider store={store} >
		<Root history={history} />
	</Provider>,
  document.getElementById('root')
);
