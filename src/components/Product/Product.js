import React, { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import styles from './Product.module.scss';
import { useMemo } from 'react';

const Product = ({
  name,
  title,
  colors,
  sizes,
  basePrice,
  
}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const handleSizeChange = (size) => {
    console.log("Selected size:", size);
    setCurrentSize(size);
  };

  const handleAddToCart = () => {
    console.log("Product added to cart:");
    console.log("Name:", name);
    console.log("Price:", price);
    console.log("Color:", currentColor);
    console.log("Size:", currentSize);
  };

  const price = useMemo(() => {
    const selectedSize = sizes.find((size) => size.name === currentSize);

    if (selectedSize) {
      const finalPrice = basePrice + selectedSize.additionalPrice;
      return finalPrice;
    } else {
      return basePrice;
    }
  }, [sizes, currentSize, basePrice]);


  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          name={name} 
          title={title} 
          colors={colors}
          sizes={sizes}
          basePrice={basePrice}
          currentSize={currentSize}
          currentColor={currentColor}
          onSizeChange={handleSizeChange}
          onColorChange={handleColorChange}
          onAddToCart={handleAddToCart}
        />
      </div>
    </article>
  );
};

export default Product;
