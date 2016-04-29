import {
  ADD_DEPENDENT,
  SYNC_ADDRESS,
  UPDATE_EMPLOYMENT,
  UPDATE_CLIENT,
  UPDATE_SPOUSE,
  UPDATE_DEPENDENT_INFO
} from '../constants/ActionTypes';

// export function updatePersonalInfo(key, value) {
//   return {
//     type: UPDATE_PERSONAL_INFO,
//     key,
//     value
//   }
// }

export function updateClient(info) {
  return {
    type: UPDATE_CLIENT,
    info
  }
}

export function updateSpouse(info) {
  return {
    type: UPDATE_SPOUSE,
    info
  }
}

export function updateDependent(key, dependent) {
  return {
    type: UPDATE_DEPENDENT_INFO,
    key,
    dependent
  }
}

export function addDependent() {
  return {
    type: ADD_DEPENDENT
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

export function syncAddress(address) {
  return {
    type: SYNC_ADDRESS,
    address
  }
}
