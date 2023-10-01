import React from 'react';
import PropTypes from 'prop-types';

const LoadingBar = ({ isLoading }) => (
  <div className={`loading-bar ${isLoading ? 'visible' : 'hidden'}`}>
    <div className="bar" />
  </div>
);

LoadingBar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingBar;
