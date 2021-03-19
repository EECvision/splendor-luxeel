import navActionTypes from './nav.types';

export const toggleActiveDropdown = obj => ({
  type: navActionTypes.TOGGLE_ACTIVE_DROPDOWN,
  payload: obj
});

export const isToggle = state => ({
  type: navActionTypes.IS_TOGGLE,
  payload: state
});
