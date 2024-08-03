import React from 'react';
import { Product } from '../lib/datatypes';

import ProductListCard from './ProductListCard';

type ProductListProps = {
  data: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <div>
      <h2 className="screen-reader-text">Products</h2>

      <div className="products-list">
        {data.map((product) => (
          <ProductListCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
