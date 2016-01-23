import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmploymentInfo } from './../actions/CounterActions';
import EmployerFormField from './EmployerFormField';

class EmploymentInfo extends Component {
	constructor() {
		super();
		this.state = {
			employers: [],
			spouseEmployers: []
		}
		this.addEmployer = this.addEmployer.bind(this);
		this.updateEmployer = this.updateEmployer.bind(this);
	}

	render() {
		let married = this.props.personalInfo.marriage === "married" ? true : false;
		let marriedDOM = married ? this.renderSpouseEmployer(married) : null;
		let employerDOM = this.renderEmployer('employers');
		return (
			<div>
				<h2>Employement Info</h2>
				<button onClick={() => this.addEmployer('employers')}>Add Employer</button>
				{employerDOM}		
				{marriedDOM}
				<br />
				<button>Save and Continue</button>
			</div>
		)
	}

	renderEmployer(type) {
		return this.state[type].map((employer, i) => {
			return (
				<EmployerFormField key={i} index={i} updateEmployer={this.updateEmployer} type={type}/>
			)			
		});
	}

	renderSpouseEmployer(married) {
		let spouseEmployerDOM = this.renderEmployer('spouseEmployers');
		if(married) {
			return (
				<div>
					<h3>Spouse</h3>
					<button onClick={() => this.addEmployer('spouseEmployers')} >Add Employer</button>
					{spouseEmployerDOM}
				</div>
			)
		}
	}

	addEmployer(type) {
		this.state[type].push(1);
		if(type === "employers") {
			this.setState({
				employers: this.state[type]
			});
		} else {
			this.setState({
				spouseEmployers: this.state[type]
			});
		}
	}

	updateEmployer(name, wage, period, type, index) {
		let employer = {
			name,
			wage,
			period
		}
		this.props.dispatch(updateEmploymentInfo(type, index, employer));
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
)(EmploymentInfo);