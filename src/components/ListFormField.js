import React, { Component } from 'react';

export default class ListFormField extends Component {
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
	}
	getOptions() {
		return this.props.list.map((item, i) => {
			return <option key={i} value={item.name}>{item.title}</option>
		});
	}

	onChange(event) {
		debugger;
	}

	render() {
		let optionsDOM = this.getOptions();
		return (
			<div>
				<select onChange={this.onChange}>
					<option>Select One</option>
					{optionsDOM}
				</select>
			</div>
		)
	}
}