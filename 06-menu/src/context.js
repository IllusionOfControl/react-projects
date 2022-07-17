import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import items from './data';
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: [],
  menu: [],
  categories: [],
  filtered_menu: [],
  filter: 'all',
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const menu = items;
    const categories = (['all', ...new Set(items.map((item) => item.category))]);
    dispatch({ type: 'DISPLAY_ITEMS', payload: { menu, categories } })
  }

  const filterMenu = (category) => {
    dispatch({ type: 'FILTER_MENU', payload: category });
  }

  const addToCart = (menu_id) => {
    dispatch({ type: 'ADD_TO_CART', payload: menu_id });
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const getTotal = () => {
    dispatch({ type: 'GET_TOTAL' })
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
  }, [state.cart])

  return (
    <AppContext.Provider value={{ ...state, filterMenu, addToCart, increase, decrease, clearCart, remove }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }