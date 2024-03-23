import React from "react";
import { CartContainer } from "../components";

const Cart = () => {
  return (
    <main>
      <section className="section cart-section">
        <div className="title">
          <h2>Cart</h2>
          <div className="underline"></div>
        </div>
        <CartContainer />
      </section>
    </main>
  );
}

export default Cart;