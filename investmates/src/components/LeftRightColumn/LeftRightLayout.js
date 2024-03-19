// LeftRightLayout.js

import React from 'react';
import './LeftRightLayout.css';

const LeftRightLayout = ({ leftComponent, rightComponent }) => {
  return (
    <div className="page-container">
      <div className="left-column">{leftComponent}</div>
      <div className="right-column">{rightComponent}</div>
    </div>
  );
};

export default LeftRightLayout;
