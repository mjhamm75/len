import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addEmployement, updateEmployment } from './../actions/Actions';
import { routeActions } from 'redux-simple-router';
import EmployerFormField from './EmployerFormField';

class EmploymentInfo extends Component {
	render() {
		let isMarried = this.props.client.marriage === "married" ? true : false;
		let marriedDOM = isMarried ? this.renderSpouseEmployer(married) : null;
		let employerDOM = this.renderEmployer(this.props.employment.client, "client");
		return (
			<div>
				<h2>Employment Info</h2>
				<button className="button" onClick={this.addEmployer.bind(this, 'client')}>Add Employer</button>
					{employerDOM}
					{marriedDOM}
				<Link to="property" className="button pull-right">Save and Continue</Link>
			</div>
		)
	}

	renderEmployer(employers, type) {
		return employers.map((employer, i) => {
			return (
				<EmployerFormField
					employer={employer}
					index={i}
					key={i}
					type={type}
					updateEmployer={this.updateEmployer.bind(this)}
				/>
			)
		});
	}

	renderSpouseEmployer(married) {
		let spouseEmployerDOM = this.renderEmployer(this.props.employment.spouse, "spouse");
		if(married) {
			return (
				<div>
					<h3>Spouse</h3>
					<button className="button" onClick={this.addEmployer.bind(this, 'spouse')} >Add Employer</button>
					{spouseEmployerDOM}
				</div>
			)
		}
	}

	addEmployer(type) {
		this.props.dispatch(addEmployement(type));
	}

	updateEmployer(name, wage, period, type, index) {
		let employer = {
			name,
			wage,
			period
		}
		this.props.dispatch(updateEmployment(type, index - 1, employer));
	}
}

function mapStateToProps(state) {
  return {
		client: state.client,
    employment: state.employment
  }
}

export default connect(
  mapStateToProps
)(EmploymentInfo);
