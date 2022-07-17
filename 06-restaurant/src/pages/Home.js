import React from 'react';
import { Categories, Menu } from '../components';

const Home = () => {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories/>
        <Menu/>
      </section>
    </main>
  );
}

export default Home;
