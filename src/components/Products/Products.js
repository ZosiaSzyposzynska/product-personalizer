
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = (props) => {
  

  return (
    <section>
      {productsData.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          title={product.title}
          colors={product.colors}
          sizes={product.sizes}
          basePrice={product.basePrice}
        />
      ))}
    </section>
  );
};

export default Products;