import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/home">Home</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
    <Link to="/">About</Link>

  </React.Fragment>
)

// For websites 'privacy', remove "/home" and leave only "/", + create an unautenticated home, probably
const alwaysOptions = (
  <React.Fragment>

  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <img src="https://image.flaticon.com/icons/svg/1172/1172857.svg" style={{width:'80px', margin:'10px'}}></img>
    <h1>Logical Fallacies</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
