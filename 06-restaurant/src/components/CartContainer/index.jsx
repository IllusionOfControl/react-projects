import React from "react";
import {CartItem} from '../../components';
import './style.css';
import {useCartContext} from "../../contexts/CartContext";

const CartContainer = () => {
  const {amount, cart, total, clearCart, removeItemFromCart, increaseItemInCart, decreaseItemInCart} = useCartContext();
  if (amount === 0)
    return <h4 className='empty-cart'>Is currently empty</h4>

  return (
    <div>
      <ul>
        {cart.map((item) =>
          <CartItem
            key={item.id}
            onRemove={removeItemFromCart}
            onIncrease={increaseItemInCart}
            onDecrease={decreaseItemInCart}
            item={item}/>
        )}
      </ul>
      <hr/>
      <div className='cart-total'>
        <h4>
          Total <span>${total}</span>
        </h4>
      </div>
      <div className="centered">
        <button className='btn clear-btn' onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default CartContainer;