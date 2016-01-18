import React, { Component } from 'react';
import DependentFormField from './DependentFormField';

export default class DependentInfo extends Component {
	constructor() {
		super();
		this.state = {
			dependents: []
		}
		this.addDependent = this.addDependent.bind(this);
	}

	addDependent() {
		this.state.dependents.push(1);
		this.setState({
			dependents: this.state.dependents
		})
	}

	renderDependents(count) {
		return count.map((dependent, i) => {
			return <DependentFormField key={i} index={i}/>
		});
	}

	render() {
		let dependentsDOM = this.renderDependents(this.state.dependents);
		return (
			<div>
				<h2>Dependent Info</h2>				
				<button onClick={this.addDependent}>Add Dependent</button>
				{dependentsDOM}
				<br />
				<button onClick={this.saveAndContinue}>Save and Continue</button>
			</div>
		)
	}

	 saveAndContinue() {
    	this.props.dispatch(routeActions.push('/step3'));
  	}
}