import {
  SYNC_ADDRESS,
  UPDATE_EMPLOYMENT_INFO,
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

export function updateDependentInfo(key, value) {
  return {
    type: UPDATE_DEPENDENT_INFO,
    key,
    value
  }
}

export function updateEmploymentInfo(employmentType, key, value) {
  return {
    type: UPDATE_EMPLOYMENT_INFO,
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
