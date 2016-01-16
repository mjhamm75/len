import React, { Component } from 'react';

export default class FormField extends Component {
	render() {
		let title = this.props.title;
		let name = this.props.name;
		let type = this.props.type;
		return (
			<div>
				<label>{title}</label>
				<input type={type} ref={name} />
			</div>
		)
	}
}