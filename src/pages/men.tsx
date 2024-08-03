import { useState, useEffect } from 'react';

import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

import { Product } from '../lib/datatypes';
import { fetchProductsByCategory } from '../lib/helpers';

export default function MenProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'mens-shirts', 'mens-shoes', 'mens-watches'];

  const fetchProducts = async () => {
    try {
      const fetchedProducts =
        selectedCategory === 'all'
          ? await Promise.all(categories.slice(1).map(fetchProductsByCategory))
          : await fetchProductsByCategory(selectedCategory);

      const allProducts = Array.isArray(fetchedProducts)
        ? fetchedProducts.flat()
        : fetchedProducts;

      setProducts(allProducts);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <Header />

      <main className="category-page-wrapper">
        <div className="category-page-container">
          <div className="category-page-header">
            <h2 id="favorites-heading" className="category-page-header-title">
              Men Products
            </h2>

            <div>
              <label htmlFor="category" className="screen-reader-text">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="category-page-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category
                      .split('-')
                      .filter((word) => word !== 'mens')
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="category-page-products-wrapper">
            {products && <ProductList data={products} />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
