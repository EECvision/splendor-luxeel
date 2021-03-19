import { createSelector } from 'reselect';

const selectNav = state => state.nav;

export const selectActiveDropdown = createSelector(
  [selectNav],
  nav => nav.activeDropdown
);

export const selectIsToggle = createSelector(
  [selectNav],
  nav => nav.isToggle
)