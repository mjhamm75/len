import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropertyFormField from './PropertyFormField';
import { addProperty } from '../actions/Actions';

class Property extends Component {
	constructor() {
		super();
		this.state = {
			properties: []
		};
		this.addProperty = this.addProperty.bind(this);
		this.updateProperty = this.updateProperty.bind(this);
	}

	addProperty() {
		this.props.dispatch(addProperty());
	}

	render() {
		let propertiesDOM = this.renderProperties(this.props.properties);
		return (
			<div>
				<h2>Property Information</h2>
				<h4>Real estate</h4>
				<button className="button" onClick={this.addProperty}>Add property</button>
					{propertiesDOM}
			</div>
		)
	}

	renderProperties(properties) {
		return properties.map((property, i) => {
			return <PropertyFormField key={i} index={i} updateProperty={this.updateProperty}/>
		});
	}

	updateProperty() {
		debugger;
	}
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(Property);
