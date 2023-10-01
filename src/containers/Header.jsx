import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import userIcon from '../assets/images/icons8-user.png';

/**
 * Header Component - Represents the header section of the application.
 *
 * This component provides a header section that typically includes the
 * application title, a navigation menu and a user icon.
 *
 * @component
 */

const Header = () => {
  const location = useLocation();

  // State to track the active link based on the current URL
  const [activeLink, setActiveLink] = useState('');

  /**
   * React useEffect hook to determine the active link based on the current URL.
   * The active link is used to apply the "font-bold" class to the active link.
   *
   * @function
   * @name useEffect
   * @param {Array} [location.pathname] - An array containing the current pathname
   * from the location object.
   */
  useEffect(() => {
    // Determine which link is active based on the current URL
    if (location.pathname === '/') {
      setActiveLink('books');
    } else if (location.pathname === '/categories/All') {
      setActiveLink('categories');
    }
  }, [location.pathname]);

  return (
    <header className="relative flex items-end justify-between gap-5 px-4 pt-8 pb-2 shadow-sm md:px-10 md:py-4 xl:px-[8%] xl:shadow-md">
      <div className="flex gap-5">
        <span className="text-xl text-secondary font-bold absolute top-1 left-0 right-0 text-center md:text-2xl md:relative">Bookstore CMS</span>
        <ul className="flex items-center md:items-end">
          <li>
            <Link
              to="/"
              className={`text-xs uppercase px-2 py-2 ${activeLink === 'books' ? 'font-bold' : 'opacity-50'}`}
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/categories/All"
              className={`text-xs uppercase px-2 py-2 ${activeLink === 'categories' ? 'font-bold' : 'opacity-50'}`}
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
      <div
        type="button"
        className="h-6 p-1 rounded-full border-2 md:h-8"
      >
        <img
          src={userIcon}
          alt="user icon"
          className="w-full h-full"
        />
      </div>
    </header>
  );
};
export default Header;
