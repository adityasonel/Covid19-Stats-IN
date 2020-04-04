import {REQUEST, SUCCESS, FALIURE} from './Type';

const initialState = {
  response: {},
  error: '',
  isRequesting: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
    case SUCCESS:
    case FALIURE:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default dataReducer;
