import React, { Component } from 'react';
import { debounce } from './../utils';

export default class FormField extends Component {

	render() {
		let update = debounce(this.props.updateValue, 250);
		let title = this.props.title;
		let name = this.props.name;
		let type = this.props.type;
		return (
			<div>
				<label>{title}</label>
				<input onChange={update} type={type} name={name} defaultValue={this.props.value} disabled={this.props.disabled}/>
			</div>
		)
	}
}