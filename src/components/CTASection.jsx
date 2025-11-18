import React from 'react';

const CTASection = ({ title, description, buttonText = 'Get in Touch' }) => {
  return (
    <section className="conclusion-section">
      <h2 className="conclusion-title">{title}</h2>
      {description && <p className="conclusion-text">{description}</p>}
      <div className="cta-row">
        <p className="cta-text">Interested in learning more about this project?</p>
        <button className="cta-btn">{buttonText}</button>
      </div>
    </section>
  );
};

export default CTASection;
