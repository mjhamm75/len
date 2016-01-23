import React, { Component } from 'react';
import { debounce } from './../utils';

class EmployerFormField extends Component {
	constructor() {
		super();
		this.updateEmployer = this.updateEmployer.bind(this);
		this.updateEmployer = debounce(this.updateEmployer, 250);	
	}

	render() {
		var index = this.props.index;
		return (
			<div>
				<label>Employer</label>
				<input ref="name" onChange={this.updateEmployer} />
				<label>Wage</label>
				<input ref="wage" onChange={this.updateEmployer} />
				<label>Period</label>
				<input ref="period" onChange={this.updateEmployer} />
			</div>
		)
	}

	updateEmployer() {
		this.props.updateEmployer(this.refs.name.value, this.refs.wage.value, this.refs.period.value, this.props.type, this.props.index + 1);
	}
}

export default EmployerFormField;