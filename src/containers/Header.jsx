import React from 'react';
import { Menu } from '../components';
import userIcon from '../assets/images/icons8-user.png';

/**
 * Header Component - Represents the header section of the application.
 *
 * This component provides a header section that typically includes the
 * application title, a navigation menu (Menu component), and a user icon.
 */
const Header = () => (
  <header className="flex items-center justify-between gap-1">
    <span className="text-2xl">Bookstore CMS</span>
    <Menu />
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
