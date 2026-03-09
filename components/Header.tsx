'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <Image src="/images/logo.png" alt="GymPro Logo" width={210} height={60} />
            </Link>

            {/* Main Menu */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Our Team</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Programs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Franchising</Link>
                  </li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="#">Information</Link>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">FAQ</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Blogs &amp; Articles</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Image Gallery</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">Video Gallery</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Header Button */}
              <div className="header-btn">
                <Link href="https://outlet.bestsports.co/" target="_blank" className="btn-default btn-highlighted">Our Store</Link>
              </div>
            </div>

            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
};

export default Header;
