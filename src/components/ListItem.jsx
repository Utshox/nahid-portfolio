import React from 'react';

const ListItem = ({ title, description }) => {
  return (
    <div className="list-item">
      <h3 className="item-title">{title}</h3>
      <p className="item-description">{description}</p>
    </div>
  );
};

export default ListItem;
