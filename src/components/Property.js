import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropertyFormField from './PropertyFormField';
import { addProperty, updateProperty } from '../actions/Actions';

class Property extends Component {
	addProperty() {
		this.props.dispatch(addProperty());
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
								index={i}
								key={i}
								property={property}
								updateProperty={this.updateProperty.bind(this)}
							/>
		});
	}

	updateProperty(index, property) {
		this.props.dispatch(updateProperty(index, property));
	}
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(Property);
