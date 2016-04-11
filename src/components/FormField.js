import React, { Component } from 'react';
import { debounce } from './../utils';
import Masked from './Masked';

export default class FormField extends Component {
	constructor() {
			super();
			this.updateValue = debounce(this.updateValue, 250);
			this.updateValue = this.updateValue.bind(this);
	}

	updateValue(event) {
		let input = this.refs.input;
		this.props.updateValue(input.name, input.value);
	}

	render() {
		let title = this.props.title;
		let name = this.props.name;
		let type = this.props.type;
		let mask = this.props.mask;

		if(mask) {
			return (
				<div className="pure-control-group">
					<label>{title}</label>
					<Masked />
				</div>
			)
		} else {
			return (
				<div className="pure-control-group">
					<label>{title}</label>
					<input
						defaultValue={this.props.value}
						disabled={this.props.disabled}
						name={name}
						onChange={this.updateValue}
						ref="input"
						type={type}
						value={this.props.value}
					/>
				</div>
			)
		}

	}
}
