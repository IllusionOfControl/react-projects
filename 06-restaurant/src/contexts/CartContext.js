import {useContext, useReducer, createContext} from "react";

const initialState = {
  cart: [],
  amount: 0,
  total: 0
}

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
      const newCart = state.cart.map((item) => item.id === newItem.id ? { ...item, amount: item.amount++ } : item);
      return {...state, cart: newCart}
    }
    case 'DECREASE_ITEM': {
      const newItem = action.payload;
      const newCart = state.cart
        .map((item) => item.id === newItem.id ? { ...item, amount: item.amount-- } : item)
        .filter((item) => item.amount > 0);
      return {...state, cart: newCart}
    }
    case 'CALCULATE_TOTAL': {
      const calculateItemPrice = (item) => {return item.amount * item.price};
      const total = state.cart.reduce((sum, item) => sum + calculateItemPrice(item), 0)
      return {...state, total: total}
    }
    case 'CALCULATE_AMOUNT': {
      const amount = state.cart.reduce((sum, item) => sum + item.amount, 0);
      return {...state, amount: amount}
    }
    case 'CLEAR_CART': {
      return {...initialState};
    }
    default: return {...state};
  }
}

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState, undefined);

  const addItemToCart = (item) => {
    dispatch({type: 'ADD_ITEM', payload: item});
    dispatch({type: 'CALCULATE_TOTAL'});
    dispatch({type: 'CALCULATE_AMOUNT'});
  }

  const removeItemFromCart = (item) => {
    dispatch({type: 'REMOVE_ITEM', payload: item});
    dispatch({type: 'CALCULATE_TOTAL'});
    dispatch({type: 'CALCULATE_AMOUNT'});
  }

  const increaseItemInCart = (item) => {
    dispatch({type: 'INCREASE_ITEM', payload: item});
    dispatch({type: 'CALCULATE_TOTAL'});
    dispatch({type: 'CALCULATE_AMOUNT'});
  }

  const decreaseItemInCart = (item) => {
    dispatch({type: 'DECREASE_ITEM', payload: item});
    dispatch({type: 'CALCULATE_TOTAL'});
    dispatch({type: 'CALCULATE_AMOUNT'});
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'});
  }

  return (
    <CartContext.Provider value={{...cartState, addItemToCart, removeItemFromCart, increaseItemInCart, decreaseItemInCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export { useCartContext, CartContext, CartProvider };