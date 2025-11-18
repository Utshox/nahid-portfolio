import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo" aria-label="Nahid home">
            <span className="logo-text">NAHID</span>
          </Link>
          <span className="nav-dot"></span>
        </div>
        <nav className="nav-right">
          <Link to="/ui-exploration" className="nav-link hneue medium">UI exploration</Link>
          <Link to="/articles" className="nav-link hneue medium">Articles</Link>
          <Link to="/photographs" className="nav-link hneue medium">Photographs</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
