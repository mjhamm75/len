import React, { Component } from 'react';
import { debounce } from './../utils';

export default class DependentFormField extends Component {
	constructor() {
		super();
		this.updateDependent = this.updateDependent.bind(this);
		this.updateDependent = debounce(this.updateDependent, 250);
	}
	render() {
		let index = this.props.index;
		return (
			<div>
				<label>Dependent {index + 1}</label>
				<br />
				<label>name</label>
				<input ref="name" onChange={this.updateDependent}/>
				<br />
				<label>age</label>
				<input ref="age" onChange={this.updateDependent}/>
				<br />
				<label>relationship</label>
				<input ref="relationship" onChange={this.updateDependent}/>
			</div>
		)
	}

	updateDependent() {
		this.props.updateDependent(this.refs.name.value, this.refs.age.value, this.refs.relationship.value, this.props.index + 1);
	}
}