import {REQUEST, SUCCESS, FALIURE} from './Type';
import fetchData from '../repo/DataRequest';

let dataAction = () => {
  return async (dispatch) => {
    dispatch(onRequest());
    fetchData()
      .then(
        (result) => dispatch(onSuccess(result)),
        (error) => dispatch(onFailed(error.message)),
      )
      .catch((error) => dispatch(onFailed(error.message)));
  };
};

const onRequest = () => {
  return {
    type: REQUEST,
    payload: {response: {}, error: '', isRequesting: true},
  };
};

const onSuccess = (response) => {
  return {
    type: SUCCESS,
    payload: {response: response, error: '', isRequesting: false},
  };
};

const onFailed = (errorMsg) => {
  return {
    type: FALIURE,
    payload: {response: {}, error: errorMsg, isRequesting: false},
  };
};

export default dataAction;
