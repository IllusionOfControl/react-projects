import React from "react";
import './style.css';

const MenuItem = ({item, onAddToCart = f => f}) => {
  return (
    <article className='menu-item'>
      <div className="overlay">
        <button onClick={() => { onAddToCart(item.id); }}>Add to cart</button>
      </div>
      <img src={item.img} alt={item.title} className='photo' />
      <div className='item-info'>
        <header>
          <h4>{item.title}</h4>
          <h4 className='price'>${item.price}</h4>
        </header>
        <p className='item-text'>{item.desc}</p>
      </div>
    </article>
  );
}

export default MenuItem;