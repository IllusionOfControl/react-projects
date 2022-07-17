import React from 'react';
import { useGlobalContext } from '../../context';
import './style.css';

const Menu = () => {
  const { menu, filter, addToCart } = useGlobalContext();
  return (
    <div className='section-center'>
      {menu.map((menuItem) => {
        if (filter === 'all' || menuItem.category === filter) {
          const { id, title, img, desc, price } = menuItem;
          return (
            <article key={id} id={id} className='menu-item'>
              <div className="overlay">
                <button onClick={() => { addToCart(id); }}>Add to cart</button>
              </div>
              <img src={img} alt={title} className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          );
        } else return (<></>);
      })}
    </div>
  );
};

export default Menu;
