import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log("Error:", err));
  }, []);

  // Filter logic (search + category)
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category
      ? item.category === category
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h2>Products</h2>

      {/* 🔍 SEARCH + FILTER */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
          }}
        >
          <option value="">All Categories</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home</option>
        </select>
      </div>

      {/* 📦 PRODUCTS GRID */}
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card">
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found 😢</p>
        )}
      </div>
       <footer className="footer">
        <h3>ShopZone</h3>
        <p>© 2026 All rights reserved</p>
      </footer>
    </div>
  );
}