import React from 'react';

const TwoColumnLayout = ({ left, right }) => {
  return (
    <div className="two-column">
      <div className="left-col">
        {left}
      </div>
      <div className="right-col">
        {right}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
