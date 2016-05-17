import {
  ADD_DEPENDENT,
  ADD_EMPLOYMENT,
  ADD_PROPERTY,
  SYNC_ADDRESS,
  UPDATE_EMPLOYMENT,
  UPDATE_CLIENT,
  UPDATE_SPOUSE,
  UPDATE_DEPENDENT,
  UPDATE_PROPERTY
} from '../constants/ActionTypes';

export function addDependent() {
  return {
    type: ADD_DEPENDENT
  }
}

export function addEmployement(employmentType) {
  return {
    type: ADD_EMPLOYMENT,
    employmentType
  }
}

export function syncAddress(address) {
  return {
    type: SYNC_ADDRESS,
    address
  }
}

export function updateClient(info) {
  return {
    type: UPDATE_CLIENT,
    info
  }
}

export function updateDependent(key, dependent) {
  return {
    type: UPDATE_DEPENDENT,
    key,
    dependent
  }
}

export function updateEmployment(employmentType, key, value) {
  return {
    type: UPDATE_EMPLOYMENT,
    employmentType,
    key,
    value
  }
}

export function updateSpouse(info) {
  return {
    type: UPDATE_SPOUSE,
    info
  }
}

export function addProperty() {
  return {
    type: ADD_PROPERTY
  }
}

export function updateProperty(index, property) {
  return {
    type: UPDATE_PROPERTY,
    index, 
    property
  }
}
