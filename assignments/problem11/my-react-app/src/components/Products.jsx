import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

const Products = () => {
  const { products, fetchProducts, loading } = useContext(GlobalContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
