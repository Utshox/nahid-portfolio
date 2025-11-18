import React from 'react';
import SolutionRow from './SolutionRow';

const SolutionsGrid = ({ solutions }) => {
  return (
    <div className="solutions-grid">
      {solutions.map((solution, index) => (
        <SolutionRow 
          key={index} 
          title={solution.title} 
          description={solution.description} 
          image={solution.image} 
        />
      ))}
    </div>
  );
};

export default SolutionsGrid;
