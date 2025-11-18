import React from 'react';

const Card = ({ icon, title, text }) => {
  return (
    <div className="card">
      {icon && (
        <div className="card-icon">
          <img src={icon} alt={title} />
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
