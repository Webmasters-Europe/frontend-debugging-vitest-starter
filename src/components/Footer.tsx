import React from 'react';
import { Link } from 'react-router-dom';

type NavigationItem = {
  name: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Women',
    href: '/women',
  },
  {
    name: 'Men',
    href: '/men',
  },
  {
    name: 'Accessories',
    href: '/accessories',
  },
];

type FooterProps = {
  navigation?: NavigationItem[];
};

const Footer: React.FC<FooterProps> = ({ navigation = navigationItems }) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-links-container">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <span className="footer-links-text">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} Vogue Junction, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
