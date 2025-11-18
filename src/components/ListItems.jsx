import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ items }) => {
  return (
    <div className="list-items">
      {items.map((item, index) => (
        <ListItem 
          key={index} 
          title={item.title} 
          description={item.description} 
        />
      ))}
    </div>
  );
};

export default ListItems;
