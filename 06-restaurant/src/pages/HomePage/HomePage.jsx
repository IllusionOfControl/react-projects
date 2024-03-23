import React, {useState} from 'react';
import { Categories, MenuGrid } from '../../components/index.js';
import {useCategories, useMenu} from "../../hooks/index.js";

const Home = () => {
  const menuItems = useMenu();
  const categories = useCategories(menuItems);
  const [filter, setFilter] = useState(categories[0]);

  const selectCategoryHandler = (category) => setFilter(category);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filter={filter}
          onSelectCategory={selectCategoryHandler}/>
        <MenuGrid
          items={menuItems}
          filter={filter}/>
      </section>
    </main>
  );
}

export default Home;
