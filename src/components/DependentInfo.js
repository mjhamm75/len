import React, { Component } from 'react';
import DependentFormField from './DependentFormField';

export default class DependentInfo extends Component {
	renderDependents(count) {
		return count.map((dependent, i) => {
			return <DependentFormField key={i} index={i}/>
		});
	}

	render() {
		let dependentsDOM = this.renderDependents([1, 2]);
		return (
			<div>
				<h2>Dependent Info</h2>
				{dependentsDOM}
				<button onClick={this.saveAndContinue}>Save and Continue</button>
			</div>
		)
	}

	 saveAndContinue() {
    	this.props.dispatch(routeActions.push('/step3'));
  	}
}