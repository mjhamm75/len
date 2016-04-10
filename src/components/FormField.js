import React, { Component } from 'react';
import { debounce } from './../utils';

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
		return (
			<div className="pure-control-group">
				<label>{title}</label>
				<input ref="input" onChange={this.updateValue} type={type} name={name} defaultValue={this.props.value} disabled={this.props.disabled}/>
			</div>
		)
	}
}
