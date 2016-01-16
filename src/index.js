import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
	<Provider store={store}>
		<Root />
	</Provider>,
  document.getElementById('root')
);
