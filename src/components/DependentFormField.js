import React, { Component } from 'react';

export default class DependentFormField extends Component {
	render() {
		let index = this.props.index;
		return (
			<div>
				<label>Dependent {index + 1}</label>
				<br />
				<label>name</label>
				<input />
				<br />
				<label>age</label>
				<input />
				<br />
				<label>relationship</label>
				<input />
			</div>
		)
	}
}