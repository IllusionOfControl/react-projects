import React from 'react'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import './style.css'

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  const {img, title, price, amount} = item;

  return (
    <li className='cart-item'>
      <img src={img} alt={title} className='photo'/>
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => onRemove(item)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => onIncrease(item)}>
          <AiOutlineArrowUp/>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => onDecrease(item)}>
          <AiOutlineArrowDown/>
        </button>
      </div>
    </li>
  )
}

export default CartItem
