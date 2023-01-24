import React from 'react';

import './NavLink.css';
import { capitalize } from '../../utils/utils';

interface NavLinkProps {
  name: string;
  iconClassName?: string;
  isActive?: boolean;
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  name,
  iconClassName,
  isActive = false,
}) => {
  return (
    <a
      className={`nav-link${isActive ? ' active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      href={`#${name.toLowerCase()}`}
    >
      {iconClassName !== undefined && <i className={`nav-icon bi bi-${iconClassName}`} />}
      <div className="nav-text">{capitalize(name)}</div>
    </a>
  );
};

export default NavLink;
