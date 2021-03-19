import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectGroupCollections = createSelector(
  [selectShop],
  shop => shop.groupCollections
);

export const selectItemCollections = createSelector(
  [selectShop],
  shop => shop.itemCollections
)

export const selectGroupCollectionsForPreview = createSelector(
  [selectGroupCollections],
  groupCollections =>
    groupCollections ? Object.keys(groupCollections).map(key => groupCollections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectGroupCollections],
    groupCollections => (groupCollections ? groupCollections[collectionUrlParam] : null)
  );

export const selectItemCollectionsForPreview = createSelector(
  [selectItemCollections],
  itemCollections => itemCollections ? Object.keys(itemCollections).map(key => itemCollections[key]) : []
)

export const selectItem = itemUrlParam => 
createSelector(
  [selectItemCollections],
  itemCollections => (itemCollections ? itemCollections[itemUrlParam] : null)
)

export const selectProductName = createSelector(
  [selectShop],
  shop => shop.productName
)