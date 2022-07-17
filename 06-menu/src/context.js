import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import items from './data';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);

  const fecthMenu = useCallback(async () => {
    setMenu(items);
    setCategories(['all', ...new Set(items.map((item) => item.category))]);
  })

  useEffect(() => {
    fecthMenu();
  }, [])

  return (
    <AppContext.Provider value={{ menu, categories }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }