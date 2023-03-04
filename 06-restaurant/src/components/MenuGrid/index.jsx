import React from 'react';
import { useCartContext } from '../../contexts/CartContext'
import { MenuItem } from '../'
import './style.css';

const Menu = ({
  items,
  filter,
}) => {
  const { addItemToCart } = useCartContext();

  return (
    <div className='section-center'>
      {items
        .filter((item) => filter === 'all' ? true : item.category === filter)
        .map((item) =>
          <MenuItem
            key={item.id}
            item={item}
            onAddToCart={addItemToCart}
          />
        )
      }
    </div>
  );
};

export default Menu;