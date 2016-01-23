import React, { Component } from 'react';
import { updateDependentInfo } from './../actions/CounterActions';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'
import DependentFormField from './DependentFormField';

class DependentInfo extends Component {
	constructor() {
		super();
		this.state = {
			dependents: []
		}
		this.addDependent = this.addDependent.bind(this);
		this.updateDependent = this.updateDependent.bind(this);
		this.saveAndContinue = this.saveAndContinue.bind(this);
	}

	addDependent() {
		this.state.dependents.push(1);
		this.setState({
			dependents: this.state.dependents
		})
	}

	updateDependent(name, age, relationship, index) {
		let dependent = {
			name,
			age,
			relationship
		}
		this.props.dispatch(updateDependentInfo(index, dependent));
	}

	renderDependents(count) {
		return count.map((dependent, i) => {
			return <DependentFormField key={i} index={i} updateDependent={this.updateDependent}/>
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

function mapStateToProps(state) {
  let personalInfo = state.personalInfo;
  return {
    personalInfo
  }
}

export default connect(
  mapStateToProps
)(DependentInfo);