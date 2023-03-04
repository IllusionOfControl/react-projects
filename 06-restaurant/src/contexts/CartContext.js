import {useContext, useReducer, createContext} from "react";
import cartReducer from "../reducers/cartReducer";

const initialState = {
  cart: [],
  amount: 0,
  total: 0
}

const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState, undefined);

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
    dispatch({type: 'CALCULATE_TOTAL'});
    dispatch({type: 'CALCULATE_AMOUNT'});
  }

  return (
    <CartContext.Provider
      value={{...cartState, addItemToCart, removeItemFromCart, increaseItemInCart, decreaseItemInCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export {useCartContext, CartContext, CartProvider};