import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../Product/Product.module.scss';


const OptionSize = ({ sizes, currentSize, onSizeChange }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={size.name}>
            <button
              type="button"
              onClick={() => onSizeChange(size.name)}
              className={clsx(styles.sizeButton, {
                [styles.active]: size.name === currentSize,
              })}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  
};

export default OptionSize;
