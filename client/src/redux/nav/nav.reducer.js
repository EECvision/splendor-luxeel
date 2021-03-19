import navActionTypes from './nav.types';

const INITIAL_STATE = {
  activeDropdown: {
    login: false,
    help: false
  },
  isToggle: true
}


const navReducer = ( state=INITIAL_STATE, action ) => {
  switch (action.type) {
    case navActionTypes.TOGGLE_ACTIVE_DROPDOWN:
      return {
        ...state,
        activeDropdown: action.payload
      }
    case navActionTypes.IS_TOGGLE:
      return {
        ...state,
        isToggle: action.payload
      }
    default:
      return state;
  }
}

export default navReducer;