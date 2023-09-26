import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button Component - Represents a customizable button element.
 *
 * This component provides a button element that can be customized with various props.
 *
 * @param {Object} props - The props for the button.
 * @param {string} props.type - The type of the button (e.g., 'button', 'submit', 'reset').
 * @param {string} props.name - The name attribute of the button.
 * @param {string} props.title - The title attribute of the button.
 * @param {string} props.className - The CSS class names for styling the button.
 * @param {function} props.onClick - The click event handler for the button.
 * @returns {JSX.Element} - A button element.
 */
const Button = ({
  type = 'button',
  name,
  title,
  className,
  onClick,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    name={name}
    title={title}
    onClick={onClick}
    className={className}
  >
    {name}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
