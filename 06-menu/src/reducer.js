const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, menu: action.payload.menu, categories: action.payload.categories, loading: false }
  }

  if (action.type === 'FILTER_MENU') {
    return { ...state, filter: action.payload };
  }

  if (action.type === 'ADD_TO_CART') {
    const id = action.payload;
    let isAdded = false;
    const cart = state.cart.map((item) => {
      console.log(item, id);
      if (item.id === id) {
        isAdded = true;
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    if (!isAdded) {
      cart.push({ ...state.menu[id-1], amount: 1});
    }
    const amount = state.amount + 1;
    return { ...state, amount, cart };
  }

  if (action.type === 'INCREASE') {
    const id = action.payload;
    let cart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    })
    return { ...state, cart }
  }

  if (action.type === 'DECREASE') {
    const id = action.payload;
    let cart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 }
      }
      return item
    })
      .filter((item) => item.amount !== 0)
    return { ...state, cart }
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  if (action.type === 'REMOVE') {
    const id = action.payload;
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== id),
    }
  }
}

export default reducer;