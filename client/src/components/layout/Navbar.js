import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <header className='med'>
        <Link to='/'>
          <FontAwesomeIcon icon={icon} /> {title}
        </Link>
      </header>
      <ul className='small'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.array,
};

Navbar.defaultProps = {
  title: 'ResumeTracker',
  icon: ['fab', 'github'],
};

export default Navbar;
