import {useMemo, useState} from "react";
import data from '../data';

export const useMenu = () => {
  const [menu, ] = useState(data)
  return menu;
}

export const useCategories = (menu) => {
  const extractCategories = (menu) => ['all', ...new Set(menu.map((item) => item.category))]
  return useMemo(() => extractCategories(menu), [menu]);
}