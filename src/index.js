import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

// import '!style!css!purecss';
import '!style!css!react-select/dist/react-select.css';
import '!style!css!./styles/app.css';

render(
	<Provider store={store} >
		<div>
			<Root history={browserHistory} />
		</div>
	</Provider>,
  document.getElementById('root')
);
