import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  return (
    <GlobalContext.Provider value={{ products, fetchProducts, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
