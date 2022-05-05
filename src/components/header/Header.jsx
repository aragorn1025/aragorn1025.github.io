import React from 'react';

import sections from '../../assets/data/Sections.json';

import './Header.css';
import NavLink from './nav-link/NavLink';

function Header() {
  return (
    <header
      className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top"
      aria-label="Navigation bar"
    >
      <div className="container">
        <div
          className="navbar-brand"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-hidden="true"
        >
          <i className="bi bi-layout-wtf" />
          <div className="fs-3">Aragorn</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbars"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbars"
        >
          <ul className="navbar-nav">
            {sections.map(({ name, iconClassName, isActive }) => (
              <li
                key={name}
                className="nav-item"
              >
                <NavLink
                  name={name}
                  iconClassName={iconClassName}
                  isActive={isActive}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
