import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = ({ user }) => {
  if (user.profile) {
    return (
      <Fragment>
        <NavLink to='/change-password' className='nav-link'>
          Change Password
        </NavLink>
        <NavLink to='/sign-out' className='nav-link'>
          Sign Out
        </NavLink>
        <NavLink to='/chat' className='nav-link'>
          ChatRoom
        </NavLink>
        <NavLink to={`profiles/${user.profile._id}`} className='nav-link'>
          My Profile
        </NavLink>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <NavLink to='/change-password' className='nav-link'>
          Change Password
        </NavLink>
        <NavLink to='/sign-out' className='nav-link'>
          Sign Out
        </NavLink>
        <NavLink to='/profiles/create' className='nav-link'>
          Create Profile
        </NavLink>
      </Fragment>
    )
  }
}

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>
      Sign Up
    </NavLink>
    <NavLink to='/sign-in' className='nav-link'>
      Sign In
    </NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink to='/' className='nav-link'>
      Home
    </NavLink>
    <NavLink to='/rules' className='nav-link'>
      Rules
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
        SocketToMe
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions({ user }) : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
