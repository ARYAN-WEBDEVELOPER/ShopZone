import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  // safer total calculation
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart 🛒</h2>
        <p>Cart is empty</p>
        <Link to="/shop">
          <button>Go to Shop</button>
        </Link>
      </div>
    );
  }

  return (
   <div className="cart-container">
  <h2>Your Cart</h2>

  {cart.map(item => (
    <div className="cart-item" key={item.id}>
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>

      <div>
        <button
          className="qty-btn"
          onClick={() => decreaseQty(item.id)}
        >
          -
        </button>

        {item.qty}

        <button
          className="qty-btn"
          onClick={() => increaseQty(item.id)}
        >
          +
        </button>
      </div>

      <button onClick={() => removeItem(item.id)}>
        ❌
      </button>
    </div>
  ))}

  <h3 className="total">
    Total: ${total.toFixed(2)}
  </h3>

  <Link to="/checkout">
  <button className="checkout-btn">
    Proceed to Checkout 🛒
  </button>
  </Link>
</div>
  );
}