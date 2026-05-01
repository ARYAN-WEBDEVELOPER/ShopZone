import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Welcome to ShopZone 🛒</h1>
        <p>Your one-stop shop for everything</p>
        <Link to="/shop">
          <button className="hero-btn">Shop Now</button>
        </Link>
      </div>

      {/* MOVING ICONS */}
      <div className="icon-strip">
        <div className="icons">
          <span>📱</span>
          <span>💻</span>
          <span>🎧</span>
          <span>⌚</span>
          <span>📷</span>
          <span>🛒</span>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your orders delivered quickly</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payment</h3>
          <p>100% secure payment system</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Best Quality</h3>
          <p>Top-rated products</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <h3>ShopZone</h3>
        <p>© 2026 All rights reserved</p>
      </footer>
    </div>
  );
}