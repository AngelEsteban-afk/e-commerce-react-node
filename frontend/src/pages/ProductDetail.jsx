import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      <button className={styles.addToCartButton}>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetail;
