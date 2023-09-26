import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Menu Component - Represents a navigation menu.
 *
 * This component provides a navigation menu with links to different sections
 * of the application. It is typically used for navigating between different views or pages.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {Array.<object>} props.menuLinks - An array of menu link objects.
 * @param {string} props.menuLinks[].name - The name of the menu link.
 * @param {string} props.menuLinks[].path - The path to navigate to when the link is clicked.
 * @param {string} props.className - The CSS class name to apply to the menu links.
 * @param {function} props.onClick - The function to call when a menu link is clicked.
 */

const Menu = ({ menuLinks, className, onClick }) => (
  <>
    <nav>
      <ul className="flex gap-2">
        {menuLinks.map((menuLink) => (
          <li
            key={menuLink.name}
          >
            <Link
              to={menuLink.path}
              className={className}
              onClick={onClick}
            >
              {menuLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

Menu.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Menu;
