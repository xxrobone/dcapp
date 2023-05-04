import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import { RiHomeHeartLine, RiUser6Line } from 'react-icons/ri';

const Navbar = ({ projectTitle, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1 style={{ display: 'flex', alignItems: 'center' }}>
        {icon} {projectTitle}
      </h1>
      <ul>
        <NavItem title='Home' url='/' icon={<RiHomeHeartLine />} />
        <NavItem title='About' url='/about' icon={<RiUser6Line />} />
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

Navbar.defaultProps = {
  projectTitle: 'DanceSchool AdminPanel',
};

export default Navbar;
