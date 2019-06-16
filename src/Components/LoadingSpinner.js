import React from 'react';
import './LoadingSpinnerCss.css';

const LoadingSpinner = () => (
    <div className="container-fluid text-center spinnerDiv">
      <i className="fa fa-spinner fa-spin spinner" />
    </div>
  );

export default LoadingSpinner;