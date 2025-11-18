import React from 'react';
import Card from './Card';

const CardGrid = ({ cards, columns = 2 }) => {
  return (
    <div className="grid-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {cards.map((card, index) => (
        <Card 
          key={index} 
          icon={card.icon} 
          title={card.title} 
          text={card.text} 
        />
      ))}
    </div>
  );
};

export default CardGrid;
