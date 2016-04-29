import React, { Component } from 'react';
import { debounce } from './../utils';

export default class DependentFormField extends Component {
	render() {
		let { dependent, index } = this.props;
		return (
			<div className="dependent">
				<label>Dependent {index + 1}</label>
				<label>Name</label>
				<input
					onChange={this.updateDependent.bind(this)}
					ref="name"
					value={dependent.name}
				/>
				<label>Age</label>
				<input
					onChange={this.updateDependent.bind(this)}
					ref="age"
					value={dependent.age}
				/>
				<label>Relationship</label>
				<input
					onChange={this.updateDependent.bind(this)}
					ref="relationship"
					value={dependent.relationship}
				/>
			</div>
		)
	}

	updateDependent() {
		this.props.updateDependent(this.refs.name.value, this.refs.age.value, this.refs.relationship.value, this.props.index);
	}
}
