import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Popular, ProductDisplay, RelatedProducts } from '../components/Index';

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id === Number(productId));

  return (
    <div>
      {/* Uncomment the following line if you want to include breadcrumbs */}
      {/* <Breadcrumbs product={product} /> */}
      <ProductDisplay product={product} />
      <RelatedProducts title={"Related Products"} />
    </div>
  );
};

export default Product;
