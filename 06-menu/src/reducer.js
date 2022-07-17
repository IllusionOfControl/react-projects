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
      console.log(item);
      if (item.id === id) {
        isAdded = true;
        return {...item, amount: item.amount + 1};
      }
      return item;
    });

    if (!isAdded) {
      cart.push({id: id, amount: 1});
    }
    const amount = state.amount + 1;
    return { ...state, amount, cart };
  }
}

export default reducer;