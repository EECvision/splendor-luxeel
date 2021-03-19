export const addItem = (cartItems, itemToAdd) => {
  const isExisting = cartItems.find(cartItem => (
    cartItem.id === itemToAdd.id
  ));

  if (isExisting) { console.log(cartItems); return cartItems }
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const incrementItem = (cartItems, itemToAdd) => {
  if (itemToAdd.quantity < 10) {
    return cartItems.map(cartItem => (
      cartItem.id === itemToAdd.id
        ?
        { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ))
  } return [...cartItems]
}


export const decrementItem = (cartItems, itemToAdd) => {
  if (itemToAdd.quantity > 1) {
    return cartItems.map(cartItem => (
      cartItem.id === itemToAdd.id
        ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ))
  } return [...cartItems]
}

export const removeItem = (cartItems, itemToAdd) => {
  return cartItems.filter(cartItem => (
    cartItem.id !== itemToAdd.id
  ))
}

