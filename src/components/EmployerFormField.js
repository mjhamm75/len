import React, { Component } from 'react';

class EmployerFormField extends Component {
	render() {
		var index = this.props.index;
		return (
			<div key={index}>
					<label>Employer</label>
					<input />
					<label>Wage</label>
					<input />
					<label>Period</label>
					<input />
			</div>
		)
	}
}

export default EmployerFormField;