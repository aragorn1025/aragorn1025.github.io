import PropTypes from 'prop-types';
import React from 'react';

import './NavLink.css';

function NavLink(props) {
  const { name, iconClassName, isActive } = props;
  return (
    <a
      className={`nav-link${isActive ? ' active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      href={`#${name.toLowerCase()}`}
    >
      {iconClassName !== '' && <i className={`nav-icon bi bi-${iconClassName}`} />}
      <div className="nav-text">{name.toCapitalize()}</div>
    </a>
  );
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
  isActive: PropTypes.bool,
};

NavLink.defaultProps = {
  iconClassName: '',
  isActive: false,
};

export default NavLink;
