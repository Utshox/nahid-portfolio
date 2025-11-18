import React from 'react';

const SolutionRow = ({ title, description, image }) => {
  return (
    <div className="solution-row">
      <div className="solution-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {image && (
        <img src={image.src} alt={image.alt} className="solution-image" />
      )}
    </div>
  );
};

export default SolutionRow;
