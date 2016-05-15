import React, { Component } from 'react';
import { debounce } from './../utils';

class EmployerFormField extends Component {
	render() {
		var { employer, index } = this.props;

		return (
			<div>
				<label>Employer</label>
				<input
					onChange={this.updateEmployer.bind(this)}
					ref="name"
					value={employer.name}
				/>
				<label>Wage</label>
				<input
					onChange={this.updateEmployer.bind(this)}
					ref="wage"
					value={employer.wage}
				/>
				<label>Period</label>
				<input
					onChange={this.updateEmployer.bind(this)}
					ref="period"
					value={employer.period}
				/>
			</div>
		)
	}

	updateEmployer(event) {
		this.props.updateEmployer(this.refs.name.value, this.refs.wage.value, this.refs.period.value, this.props.type, this.props.index + 1);
	}
}

export default EmployerFormField;
