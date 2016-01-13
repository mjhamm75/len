import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}

class One extends React.Component {
  render() {
    return <p>One</p>;
  }
}

class Two extends React.Component {
  render() {
    return <p>Two</p>;
  }
}

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