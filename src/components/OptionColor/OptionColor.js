import React from 'react';
import clsx from 'clsx'; 
import styles from '../Product/Product.module.scss';



const OptionColor = ({ colors, currentColor, onColorChange }) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color) => (
          <li key={color}>
            <button
              className={clsx(styles.colorButton, {
                [styles.active]: color === currentColor,
                [styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`]]: true, 
              })}
              type="button"
              onClick={() => onColorChange(color)}
            >
              
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default OptionColor;
