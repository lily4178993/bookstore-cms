import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Menu Component - Represents a navigation menu.
 *
 * This component provides a navigation menu with links to different sections
 * of the application, such as "Books" and "Categories." It is typically used
 * for navigating between different views or pages.
 */
const Menu = () => (
  <>
    <nav>
      <ul className="flex gap-2">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </>
);

export default Menu;
