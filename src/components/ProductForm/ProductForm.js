import React from 'react';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from '../Product/Product.module.scss';

const ProductForm = ({
  
  colors,
  sizes,
  currentColor,
  currentSize, 
  onColorChange,
  onSizeChange,
  onAddToCart,
}) => {

 const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega domyślnemu zachowaniu przeglądarki
    onAddToCart(); // Wywołaj funkcję obsługującą dodanie do koszyka
  };

  return (
    <form onSubmit ={handleSubmit}>
      <OptionSize sizes={sizes} currentSize={currentSize} onSizeChange={onSizeChange} />
      <OptionColor colors={colors} currentColor={currentColor} onColorChange={onColorChange} />
      <Button type="button" onClick={onAddToCart} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};


export default ProductForm;
