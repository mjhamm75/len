import React, { Component } from 'react';
import PropertyFormField from './PropertyFormField';

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
		this.state.properties.push(1);
		this.setState({
			properties: this.state.properties
		})
	}

	render() {
		let propertiesDOM = this.renderProperties(this.state.properties);
		return (
			<div>
				<h2>Property Information</h2>
				<h4>Real estate</h4>
				<button className="pure-button" onClick={this.addProperty}>Add property</button>
				<form className="pure-form pure-form-stacked">
					{propertiesDOM}
				</form>
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

export default Property;
