import React from 'react';

const SectionBlock = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`section-block ${className}`}>
      {title && (
        <h2 className="section-title">
          {typeof title === 'string' ? title : title}
        </h2>
      )}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {children}
    </section>
  );
};

export default SectionBlock;
