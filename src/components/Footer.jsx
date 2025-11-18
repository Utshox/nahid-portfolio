import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <p className="hneue tertiary">PURPOSEFUL SOLUTION</p>
        <p className="hneue tertiary">FOR YOUR BUSINESS</p>
      </div>
      <div className="footer-cta">
        <div className="cta-copy">
          <p className="hneue title"><span className="italic secondary">Let's</span> Collaborate..</p>
          <p className="hneue underline">neamul.morshed.nahid@gmail.com</p>
        </div>
        <a href="mailto:neamul.morshed.nahid@gmail.com" className="btn">EMAIL ME</a>
      </div>
      <div className="footer-bottom">
        <div className="footer-marquee">
          <div className="marquee-content">
            <div className="marquee-text">DESIGNED BY NEAMUL MORSHED NAHID</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
