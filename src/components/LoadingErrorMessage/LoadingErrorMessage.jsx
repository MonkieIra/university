import React from 'react';

const LoadingErrorMessage = ({ loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return null;
};

export default LoadingErrorMessage;