import React from 'react';

type HeroProps = {
  companyName?: string;
};

const Hero: React.FC<HeroProps> = ({ companyName = 'Vogue Junction' }) => {
  return (
    <div className="hero-wrapper">
      <div className="hero-text-container">
        <h1 className="hero-title">Welcome to the world of {companyName}!</h1>
        <p className="hero-subtitle">
          Discover a diverse collection of stylish products for everyone. From
          trendy apparel and accessories to timeless classics, we offer
          something for every taste and occasion. Shop now and elevate your
          style!
        </p>
      </div>
    </div>
  );
};

export default Hero;
