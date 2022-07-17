import React from 'react'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import { useGlobalContext } from '../../context'
import './style.css'

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} className='photo'/>
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
          <AiOutlineArrowUp/>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
          <AiOutlineArrowDown/>
        </button>
      </div>
    </article>
  )
}

export default CartItem
