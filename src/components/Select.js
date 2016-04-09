import React, { Component } from 'react';
import FormField from './FormField';

class Select extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSelect: false,
			fields: [],
			options: props.options
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		let value = event.target.value;
		let option = this.props.options.find(option => option.name === value);
		this.state.fields.push(option);
		let filteredOptions = this.state.options.filter(option => option.name !== value);
		this.setState({
			fields: this.state.fields,
			showSelect: false,
			options: filteredOptions
		})
	}

	renderOptions() {
		return this.state.options.map((option, i) => {
			return <option key={i} value={option.name}>{option.title}</option>
		})
	}

	render() {
		let showSelect = this.state.showSelect;
		let options = this.renderOptions();
		let select = showSelect ? (
			<select onChange={this.onChange}>
				<option>--</option>
				{options}
			</select>
		) : null;
		let button = this.state.options.length > 0 ? <button onClick={() => this.setState({showSelect : true})}>{this.props.title}</button> : null;
		let fields = this.state.fields.map((field, i) => <FormField key={i} title={field.title} name={field.name} type={field.type} updateValue={this.props.updateValue}/>);
		return (
			<div>
				{button}
				{select}
				<form className="pure-form pure-form-stacked">
					<fieldset>
						{fields}						
					</fieldset>
				</form>
			</div>
		)
	}
}

export default Select;
