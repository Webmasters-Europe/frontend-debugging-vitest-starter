import { useState, useEffect } from 'react';
import { Product, Review } from '../lib/datatypes';

import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const fetchProduct = async () => {
    try {
      const productRes = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const productData = await productRes.json();
      setProduct(productData);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (!product) {
    return null;
  }

  return (
    <div>
      <Header />

      <main>
        <BackButton />

        <div className="product-page-wrapper">
          <div className="product-page-container">
            <ImageGallery product={product} />

            {/* Product info */}
            <div className="product-page-info-container">
              <h1 className="product-page-info-title">{product.title}</h1>

              <div className="product-page-mt-3">
                <h2 className="screen-reader-text">Product information</h2>

                <p className="product-page-info-price">
                  {Number(product.price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>

                {/* Rating */}
                <div className="product-page-mt-3">
                  <h3 className="screen-reader-text">Rating</h3>

                  <div className="product-page-info-rating-container">
                    <div className="product-page-info-rating-container">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className="star-icons"
                          style={{
                            fill:
                              product.rating > rating ? '#1e293b' : '#e5e7eb',
                          }}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="screen-reader-text">
                      {product.rating} out of 5 stars
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="product-page-mt-3">
                  <p className="product-page-text">{product.stock} in stock</p>
                </div>

                {/* Description */}
                <div className="product-page-mt-6">
                  <h3 className="screen-reader-text">Description</h3>

                  <p className="product-page-description">
                    {product.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="product-page-mt-6">
                  <h3 className="screen-reader-text">Tags</h3>
                  <div className="product-page-tags-container">
                    {product.tags.map((tag) => (
                      <span key={tag} className="product-page-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Reviews reviews={product.reviews} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="back-button-wrapper ">
      <button onClick={() => navigate(-1)} className="back-button">
        <ChevronRightIcon className="back-button-icon" />
        <span className="back-button-icon-span">Back</span>
      </button>
    </div>
  );
}

function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className="product-page-reviews-wrapper">
      <h3 className="product-page-reviews-title">Reviews</h3>

      <div className="product-page-reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="product-page-mt-6">
            <div className="product-page-ratings-box">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className="star-icons"
                  style={{
                    fill: review.rating > rating ? '#1e293b' : '#e5e7eb',
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="product-page-reviews-text-box">
              <p className="product-page-text">{review.reviewerName}</p>

              <p className="product-page-text">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>

            <p className="product-page-reviews-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

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
