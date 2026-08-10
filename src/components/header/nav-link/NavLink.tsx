import React from 'react';

import './NavLink.css';

interface NavLinkProps {
  name: string;
  displayName: string;
  iconClassName?: string;
  isActive?: boolean;
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({ name, displayName, iconClassName, isActive = false }) => {
  return (
    <a
      className={`nav-link${isActive ? ' active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      href={`#${name}`}
    >
      {iconClassName !== undefined && <i className={`nav-icon bi bi-${iconClassName}`} />}
      <div className="nav-text">{displayName}</div>
    </a>
  );
};

export default NavLink;
