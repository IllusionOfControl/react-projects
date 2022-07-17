import React from "react";
import { CartItem } from '../../components';
import { useGlobalContext } from "../../context";
import './style.css';

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <>
        <h4 className='empty-cart'>Is currently empty</h4>
      </>
    )
  }
  return (
    <>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>

      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          Clear cart
        </button>
      </footer>
    </>
  );
}

export default CartContainer;