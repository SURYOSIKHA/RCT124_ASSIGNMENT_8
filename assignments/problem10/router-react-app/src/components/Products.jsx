import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {
          page: searchParams.get('page') || 1,
          limit: searchParams.get('limit') || 10,
          sort: searchParams.get('sort') || 'price',
          order: searchParams.get('order') || 'asc',
          filter: searchParams.get('filter') || '',
        };

        const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products', { params });

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data && response.data.products && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          throw new Error('Data format error: Response data is not an array.');
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-container">
      <h1>Products</h1>
      <ul className="products-list">
        {products.map(product => (
          <li key={product.id}>
            <a href={`/products/${product.id}`} className="product-link">{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
