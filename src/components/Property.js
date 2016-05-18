import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropertyFormField from './PropertyFormField';
import { addMortgage, addProperty, updateMortgage, updateProperty } from '../actions/Actions';

class Property extends Component {
	addProperty() {
		this.props.dispatch(addProperty());
	}

	addMortgage(index) {
		this.props.dispatch(addMortgage(index));
	}

	render() {
		let propertiesDOM = this.renderProperties(this.props.properties);
		return (
			<div>
				<h2>Property Information</h2>
				<h4>Real estate</h4>
				<button
					className="button"
					onClick={this.addProperty.bind(this)}>Add property</button>
					{propertiesDOM}
			</div>
		)
	}

	renderProperties(properties) {
		return properties.map((property, i) => {
			return <PropertyFormField
								addMortgage={this.addMortgage.bind(this)}
								index={i}
								key={i}
								property={property}
								updateMortgage={this.updateMortgage.bind(this)}
								updateProperty={this.updateProperty.bind(this)}
							/>
		});
	}

	updateProperty(index, property) {
		this.props.dispatch(updateProperty(index, property));
	}

	updateMortgage(propertyIndex, mortgageIndex, mortgage) {
		this.props.dispatch(updateMortgage(propertyIndex, mortgageIndex, mortgage))
	}
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(Property);
