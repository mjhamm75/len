import React, { Component } from 'react';
import { Link } from 'react-router';
import { addDependent, updateDependent } from './../actions/Actions';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'
import DependentFormField from './DependentFormField';

class DependentInfo extends Component {
	addDependent() {
		this.props.dispatch(addDependent());
	}

	updateDependent(name, age, relationship, index) {
		let dependent = {
			name,
			age,
			relationship
		}
		this.props.dispatch(updateDependent(index, dependent));
	}

	renderDependents(dependents) {
		return dependents.map((dependent, i) => {
			return (
				<DependentFormField
					dependent={dependent}
					index={i}
					key={i}
					updateDependent={this.updateDependent.bind(this)}
				/>
			)
		});
	}

	render() {
		let dependentsDOM = this.renderDependents(this.props.dependents);
		return (
			<div>
				<h2>Dependent Info</h2>
				<button className="button" onClick={this.addDependent.bind(this)}>Add Dependent</button>
					{dependentsDOM}
				<Link className="button pull-right" to="employment">Save and Continue</Link>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    dependents: state.dependents
  }
}

export default connect(
  mapStateToProps
)(DependentInfo);
