import React, { Component } from 'react';
import { debounce } from './../utils';

class PropertyFormField extends Component {
 	addMortgages() {
		this.props.addMortgage(this.props.index);
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
					<select onChange={this.addMortgages.bind(this)}>
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
		return mortgages.map((mortgage, index) => {
			return (
				<div key={index}>
					<h5>Lender {index + 1}</h5>
					<label>Lender</label>
					<input
						onChange={this.updateMortgage.bind(this, this.props.index, index)}
						ref="lender"
						value={mortgage.lender}
					/>
					<br />
					<label>Mortgage</label>
					<input
						onChange={this.updateMortgage.bind(this, this.props.index, index)}
						ref="amount"
						value={mortgage.amount}
					/>
					<br />
					<label>Monthly Payment</label>
					<input
						onChange={this.updateMortgage.bind(this, this.props.index, index)}
						ref="monthly"
						value={mortgage.monthly}
					/>
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

	updateMortgage(propertyIndex, mortgageIndex) {
		let mortgage = {
				lender: this.refs.lender.value,
				payoff: this.refs.amount.value,
				monthly: this.refs.monthly.value
		}
		this.props.updateMortgage(propertyIndex, mortgageIndex, mortgage);
	}
}

export default PropertyFormField;
