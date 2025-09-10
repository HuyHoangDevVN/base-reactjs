import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
  </div>
);

export default LoadingSpinner;
