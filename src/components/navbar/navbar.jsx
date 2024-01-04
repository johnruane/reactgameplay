import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' />
        </a>

        <a
          role='button'
          className={`navbar-burger ${isToggled ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={() => setIsToggled((prev) => !prev)}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div
        id='navbarBasicExample'
        className={`navbar-menu ${isToggled ? 'is-active' : ''}`}
      >
        <div className='navbar-start'>
          <Link className='navbar-item' to={`/`}>
            Home
          </Link>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>Games</a>

            <div className='navbar-dropdown'>
              <Link className='navbar-item' to={`/tetris`}>
                Tetris
              </Link>
              <Link className='navbar-item' to={`/snake`}>
                Snake
              </Link>
            </div>
          </div>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a className='button is-primary'>
                <strong>Sign up</strong>
              </a>
              <a className='button is-light'>Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
