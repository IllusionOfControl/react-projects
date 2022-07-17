import React from "react";
import { CartItem } from '../../components';
import { useGlobalContext } from "../../context";

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext()
  return (
    <main>
      <section className="section about-section">
        <div className="title">
          <h2>Cart</h2>
          <div className="underline"></div>
        </div>
        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
      </section>
    </main>

  );
}

export default Cart;