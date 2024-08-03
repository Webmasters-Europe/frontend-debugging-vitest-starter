import React, { useState, useEffect } from 'react';
import { Product } from '../lib/datatypes';

type ImageGalleryProps = {
  product: Product;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  product,
}: {
  product: Product;
}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setSelectedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % product.images.length;
        setSelectedImage(product.images[nextIndex]);
        return nextIndex;
      });
    }

    if (event.key === 'ArrowLeft') {
      setSelectedIndex((prevIndex) => {
        const nextIndex =
          (prevIndex - 1 + product.images.length) % product.images.length;
        setSelectedImage(product.images[nextIndex]);
        return nextIndex;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product.images]);

  return (
    <div className="image-gallery-wrapper">
      {/* Image selector */}
      <div className="image-selector-wrapper">
        <div className="image-selector-container">
          {product.images.map((image, index) => (
            <button
              key={index}
              className="image-selector-btn"
              style={{
                border: selectedIndex === index ? '2px solid #1e293b' : 'none',
              }}
              onClick={() => {
                setSelectedImage(image);
                setSelectedIndex(index);
              }}
            >
              <span className="screen-reader-text">{image}</span>
              <span className="image-selector-img-wrapper">
                <img
                  src={image}
                  alt={product.title}
                  className="image-selector-img"
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Image Display */}
      <div className="image-selector-main-img-wrapper">
        <img
          src={selectedImage}
          alt={product.title}
          className="image-selector-main-img"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
