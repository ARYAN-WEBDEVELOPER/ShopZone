import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
   <div className="product-page">
  <img src={product.thumbnail} />

  <div className="product-info">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <h3 className="price">${product.price}</h3>

    <button
      className="btn"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
</div>
  );
}