const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = {...action.payload, amount: 1};
      if (state.cart.find(item => item.id === newItem.id)) {
        const newCart = state.cart.map(
          (item) => item.id === newItem.id
            ? {...item, amount: item.amount++}
            : item
        );
        return {...state, cart: newCart};
      } else {
        const newCart = [...state.cart, newItem];
        return {...state, cart: newCart}
      }
    }
    case 'REMOVE_ITEM': {
      const newItem = action.payload;
      const newCart = state.cart.filter((item) => item.id !== newItem.id)
      return {...state, cart: newCart}
    }
    case 'INCREASE_ITEM': {
      const newItem = action.payload;
      const newCart = state.cart.map((item) => item.id === newItem.id ? {...item, amount: item.amount++} : item);
      return {...state, cart: newCart}
    }
    case 'DECREASE_ITEM': {
      const newItem = action.payload;
      const newCart = state.cart
        .map((item) => item.id === newItem.id ? {...item, amount: item.amount--} : item)
        .filter((item) => item.amount > 0);
      return {...state, cart: newCart}
    }
    case 'CALCULATE_TOTAL': {
      const calculateItemPrice = (item) => {
        return item.amount * item.price
      };
      const total = state.cart.reduce((sum, item) => sum + calculateItemPrice(item), 0)
      return {...state, total: total}
    }
    case 'CALCULATE_AMOUNT': {
      const amount = state.cart.reduce((sum, item) => sum + item.amount, 0);
      return {...state, amount: amount}
    }
    case 'CLEAR_CART': {
      return { ...state, cart: [] };
    }
    default:
      return {...state};
  }
}

export default reducer;