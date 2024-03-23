import React from "react";
import { CartContainer } from "../../components/index.js";

const CartPage = () => {
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

export default CartPage;