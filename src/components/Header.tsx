import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Mobile Header */}
      <div className="mobile-header-wrapper">
        <div className="header-container">
          <Link to="/" className="mobile-header-logo-link">
            <div className="logo-text">Vogue Junction</div>
          </Link>
        </div>

        <div className="mobile-header-links-container">
          <Link to="/women" className="header-link-text">
            Women
          </Link>
          <Link to="/men" className="header-link-text">
            Men
          </Link>
          <Link to="/accessories" className="header-link-text">
            Accessories
          </Link>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="desktop-header-wrapper">
        <div className="header-container">
          <Link to="/" className="desktop-header-logo-link">
            <div className="logo-text">Vogue Junction</div>
          </Link>

          <div className="desktop-header-links-container">
            <Link to="/women" className="header-link-text">
              Women
            </Link>
            <Link to="/men" className="header-link-text">
              Men
            </Link>
            <Link to="/accessories" className="header-link-text">
              Accessories
            </Link>
          </div>
        </div>
      </div>

      <div className="header-border"></div>
    </header>
  );
};

export default Header;
