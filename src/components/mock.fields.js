let name = [
  {
    title: 'Name',
    name: 'name',
    type: 'text'
  },
  {
    title: 'Social Security',
    name: 'ssn',
    type: 'text'
  },
  {
    title: 'Date of Birth',
    name: 'dob',
    type: 'text'
  }
];      
      
let phones = [
  {
    title: 'Home Phone',
    name: 'hphone',
    type: 'text' 
  },
  {
    title: 'Work Phone',
    name: 'wphone',
    type: 'text'
  },
  {
    title: 'Cell Phone',
    name: 'cphone',
    type: 'text'
  }
];

let email = [
  {
    title: 'Email',
    name: 'email',
    type: 'text' 
  }
];

let address = [
  {
    title: 'Street 1',
    name: 'street1',
    type: 'text'
  },
  {
    title: 'Street 2',
    name: 'street2',
    type: 'text'
  },
  {
    title: 'City',
    name: 'city',
    type: 'text'
  },
  {
    title: 'State',
    name: 'state',
    type: 'text'
  },
  {
    title: 'Zipcode',
    name: 'zip',
    type: 'text'
  }
]

module.exports = {
  name,
  phones, 
  address,
  email
}