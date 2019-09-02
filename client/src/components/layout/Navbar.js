import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <Link className='item' to='/home'>
        <p>Hello, {user && user.name} !</p>
      </Link>

      <Link onClick={onLogout} to='/login' className='item'>
        <i className='fas fa-sign-out-alt' />
        &nbsp;&nbsp;
        <span className='hide-sm'>Logout</span>
      </Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className='item' to='/register'>
        Register
      </Link>
      <Link className='item' to='/login'>
        Login
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <div className='ui secondary menu' style={{ background: '#f1f1f1' }}>
        <i
          aria-hidden='true'
          className='address book outline white large icon'
          style={{ margin: 'auto 2px auto 30px' }}
        ></i>
        <h2 className='item' style={{ paddingLeft: '0' }}>
          Contact Keeper
        </h2>
        <div className='right menu'>
          {isAuthenticated ? authLinks : guestLinks}
          <Link className='item' to='/about'>
            About
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
