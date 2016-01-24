import React, { Component } from 'react';

class PropertyFormField extends Component {
	constructor() {
		super();
		this.state = {
			mortgages: []
		}
		this.updateMortgages = this.updateMortgages.bind(this);
	}

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
		let mortgagesDOM = this.renderMortgages(this.state.mortgages);
		return (
			<div>
				<h4>Property {this.props.index + 1}</h4>
				<form>
					<label>Property Address</label>
					<input ref="address" />
					<br />
					<label>Current Value</label>
					<input ref="currentValue" />
					<br />
					<label>Number of Mortgages</label>
					<select onChange={this.updateMortgages}>
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
					<input ref="lender"/>
					<br />
					<label>Mortgage</label>
					<input ref="amount" />
					<br />
					<label>Monthly Payment</label>
					<input ref="monthly" />
				</div>
			)
		});
	}
}

export default PropertyFormField;