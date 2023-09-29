import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/images/icons8-user.png';

/**
 * Header Component - Represents the header section of the application.
 *
 * This component provides a header section that typically includes the
 * application title, a navigation menu and a user icon.
 *
 * @component
 */

const Header = () => (
  <header className="flex items-center justify-between gap-1">
    <span className="text-2xl">Bookstore CMS</span>
    <ul className="flex gap-2">
      <li>
        <Link
          to="/"
          className="px-3 py-2"
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          to="/categories/All"
          className="px-3 py-2"
        >
          Categories
        </Link>
      </li>
    </ul>
    <div
      type="button"
      className="justify-self-end p-4 rounded-full"
    >
      <img
        src={userIcon}
        alt="user icon"
        className="w-8 h-8"
      />
    </div>
  </header>
);

export default Header;
