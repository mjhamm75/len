import React, { Component } from 'react';
import FormField from './FormField';

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <FormField title="Name" name="name" type="text"/>
        <FormField title="Social Security Number" name="ssn" type="text"/>
        <FormField title="Date of Birth" name="dob" type="text"/>
        <FormField title="Home Phone" name="hphone" type="text"/>
        <FormField title="Work Phone" name="wphone" type="text"/>
        <FormField title="Cell Phone" name="cphone" type="text"/>                      
      </div>
    )
  }
}
