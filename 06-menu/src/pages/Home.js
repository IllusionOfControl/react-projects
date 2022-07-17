import React, { useState } from 'react';
import { Categories, Menu } from '../components';
import {useGlobalContext} from '../context'

const Home = () => {
  const {menu, categories} = useGlobalContext();
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Home;
