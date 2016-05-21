import axios from 'axios';

import {
  ADD_DEPENDENT,
  ADD_EMPLOYMENT,
  ADD_FILE,
  ADD_MORTGAGE,
  ADD_PROPERTY,
  DELETE_FILE,
  FILES_SAVED,
  RENAME_FILE,
  SYNC_ADDRESS,
  UPDATE_EMPLOYMENT,
  UPDATE_CLIENT,
  UPDATE_SPOUSE,
  UPDATE_DEPENDENT,
  UPDATE_MORTGAGE,
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

export function addMortgage(index) {
  return {
    type: ADD_MORTGAGE,
    index
  }
}

export function addProperty() {
  return {
    type: ADD_PROPERTY
  }
}

export function addFile(files) {
  return {
    type: ADD_FILE,
    files
  }
}

export function deleteFile(index) {
  return {
    type: DELETE_FILE,
    index
  }
}

export function renameFile(index, name) {
  return {
    type: RENAME_FILE,
    index,
    name
  }
}

export function saveFiles() {
  return (dispatch, state) => {
    let data = new FormData();
    data.append('files', state.files);
    let opts = {
      transformRequest: function(data) { return data; }
    };

    return axios.post('/files', {
      data,
      opts
    }).then(result => {
      return dispatch({
        type: FILES_SAVED
      })
    })
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

export function updateMortgage(propertyIndex, mortgageIndex, mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    propertyIndex,
    mortgageIndex,
    mortgage
  }
}

export function updateProperty(index, property) {
  return {
    type: UPDATE_PROPERTY,
    index,
    property
  }
}

export function updateSpouse(info) {
  return {
    type: UPDATE_SPOUSE,
    info
  }
}
