import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from "../GlobalContext"

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(GlobalContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
