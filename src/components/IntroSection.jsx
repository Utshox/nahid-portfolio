import React from 'react';

const IntroSection = ({ text }) => {
  return (
    <section className="intro-section">
      <p className="intro-text">{text}</p>
    </section>
  );
};

export default IntroSection;
