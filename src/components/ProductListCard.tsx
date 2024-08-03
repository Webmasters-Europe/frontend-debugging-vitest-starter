import React from 'react';
import { Product } from '../lib/datatypes';

import { Link } from 'react-router-dom';

const ProductListCard = ({ product }: { product: Product }) => {
  const { id, title, price, rating, stock, thumbnail } = product;

  return (
    <div className="product-card-container">
      <div className="product-card-img-wrapper">
        <img src={thumbnail} alt={title} className="product-card-img" />
      </div>

      <div className="product-card-info-box">
        <h3 className="product-card-name">
          <Link to={`/products/${id}`}>
            <span aria-hidden="true" className="product-card-name-span" />
            {title}
          </Link>
        </h3>

        <div className="product-card-desc-box">
          <p className="screen-reader-text">
            {Math.round(rating)} out of 5 stars
          </p>

          <div className="product-card-ratings-wrapper">
            {[0, 1, 2, 3, 4].map((ratingNumber) => (
              <StarIcon
                key={ratingNumber}
                className="star-icons"
                style={{
                  fill: rating > ratingNumber ? '#1e293b' : '#e5e7eb',
                }}
                aria-hidden="true"
              />
            ))}
          </div>

          <p className="product-card-stock">{stock} in stock</p>
        </div>

        <p className="product-card-price">
          {Number(price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductListCard;

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
