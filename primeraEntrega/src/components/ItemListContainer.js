import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="alert alert-info" role="alert">
        {greeting}
      </div>
    </div>
  );
};

export default ItemListContainer;