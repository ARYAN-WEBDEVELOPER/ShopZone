import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
   <nav className="navbar">
  <div className="logo">ShopZone</div>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/contact">Contact</Link>

    <Link to="/cart">
      Cart <span className="cart-badge">{totalItems}</span>
    </Link>

    {user ? (
  <>
    <span>Hello, {user.name}</span>
    <button onClick={logout}>Logout</button>
  </>
) : (
  <Link to="/login">Login</Link>
)}
  </div>
</nav>
  );
}