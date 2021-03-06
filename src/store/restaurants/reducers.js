import {combineReducers} from 'redux';
import {
  STORE_RESTAURANTS,
  START_LOADING,
  RECORD_LOADING_ERROR,
} from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    case START_LOADING:
      return true;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
    case RECORD_LOADING_ERROR:
      return false;
    case START_LOADING:
      return false;
    default:
      return state;
  }
};

const loadError = (state = false, action) => {
  switch (action.type) {
    case RECORD_LOADING_ERROR:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  records,
  loading,
  loadError,
});
