import React, { Component } from 'react';
import { debounce } from './../utils';

class PropertyFormField extends Component {
	createArray(count) {
		let result = [];
		for(let i = 0; i < count; i++) {
			result.push(i);
		}
		return result;
	}
 	updateMortgages(event) {
 		let arr = this.createArray(event.target.value);
		let mortgages = this.state.mortgages.concat(arr);
		this.setState({
			mortgages
		})
	}

	render() {
		let mortgagesDOM = this.renderMortgages(this.props.property.mortgages);
		return (
			<div>
				<h4>Property {this.props.index + 1}</h4>
				<form>
					<label>Property Address</label>
					<input
						onChange={this.updateProperty.bind(this, this.props.index)}
						ref="address"
						value={this.props.property.address}
					/>
					<br />
					<label>Current Value</label>
					<input
						onChange={this.updateProperty.bind(this, this.props.index)}
						ref="currentValue"
						value={this.props.property.currentValue}
					/>
					<br />
					<label>Number of Mortgages</label>
					<select onChange={this.updateMortgages.bind(this)}>
						<option>--</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
					{mortgagesDOM}
				</form>
			</div>
		)
	}

	renderMortgages(mortgages) {
		return mortgages.map((mortgage, i) => {
			return (
				<div>
					<h5>Lender {i + 1}</h5>
					<label>Lender</label>
					<input ref="lender" onChange={this.updateMortgage}/>
					<br />
					<label>Mortgage</label>
					<input ref="amount" onChange={this.updateMortgage}/>
					<br />
					<label>Monthly Payment</label>
					<input ref="monthly" onChange={this.updateMortgage}/>
				</div>
			)
		});
	}

	updateProperty(index) {
		let property = {
			address: this.refs.address.value,
			currentValue: this.refs.currentValue.value,
			mortgages: []
		}
		this.props.updateProperty(index, property);
	}

	updateMortgage() {
		debugger;
	}
}

export default PropertyFormField;
