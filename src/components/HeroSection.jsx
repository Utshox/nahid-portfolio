import React from 'react';

const HeroSection = ({ title, backLink, metaInfo, heroImage }) => {
  return (
    <>
      <section className="page-hero">
        <div className="hero-content">
          {backLink && (
            <a href={backLink.href} className="back-link">
              {backLink.text}
            </a>
          )}
          <h1 className="page-title">{title}</h1>
          {metaInfo && (
            <div className="meta-info">
              {metaInfo.map((item, index) => (
                <div key={index} className="meta-item">
                  <p className="meta-label">{item.label}</p>
                  <p className="meta-value">{item.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {heroImage && (
        <section>
          <img src={heroImage.src} alt={heroImage.alt} className="hero-image" />
        </section>
      )}
    </>
  );
};

export default HeroSection;
