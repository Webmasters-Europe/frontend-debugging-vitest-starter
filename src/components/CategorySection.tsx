import React from 'react';

type CategorySectionProps = {
  categories: {
    imgSrc: string;
    imgAlt: string;
    href: string;
    linkText: string;
  }[];
};

import { Link } from 'react-router-dom';

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section aria-labelledby="category-heading">
      <div className="category-section-wrapper">
        <h2 id="category-heading" className="category-section-title">
          Explore by Category
        </h2>

        <div className="category-section-grid-wrapper">
          <Link to={categories[0].href} className="category-section-grid-main">
            <img
              src={categories[0].imgSrc}
              alt={categories[0].imgAlt}
              className="category-section-grid-main-img"
            />

            <div aria-hidden="true" className="category-section-gradient-bg" />

            <div className="category-section-cta-container">
              <div>
                <h3 className="category-section-cta-title">
                  <span className="category-section-cta-span" />
                  {categories[0].linkText}
                </h3>
                <p aria-hidden="true" className="category-section-cta">
                  Shop now
                </p>
              </div>
            </div>
          </Link>

          {categories.slice(1).map((category, index) => (
            <div key={index} className="category-section-categories-container">
              <img
                src={category.imgSrc}
                alt={category.imgAlt}
                className="category-section-categories-img"
              />
              <div
                aria-hidden="true"
                className="category-section-gradient-bg"
              />
              <div className="category-section-categories-cta-container">
                <div>
                  <h3 className="category-section-cta-title">
                    <Link to={category.href}>
                      <span className="category-section-cta-span" />
                      {category.linkText}
                    </Link>
                  </h3>
                  <p aria-hidden="true" className="category-section-cta">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
