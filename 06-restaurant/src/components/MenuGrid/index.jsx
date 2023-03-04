import React from 'react';
import { useCartContext } from '../../context/CartContext'
import { MenuItem } from '../'
import './style.css';
import {useGlobalContext} from "../../context";

const Menu = ({
  items,
  filter,
}) => {
  const { addToCart } = useGlobalContext();
  //const { addItemToCart } = useCartContext();

  return (
    <div className='section-center'>
      {items
        .filter((item) => filter === 'all' ? true : item.category === filter)
        .map((item) =>
          <MenuItem
            key={item.id}
            item={item}
            onAddToCart={addToCart}
          />
        )
      }
    </div>
  );
};

export default Menu;