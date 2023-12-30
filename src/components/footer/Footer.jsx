import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Tsania</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/tsania-warda/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/tsaniawarda2"
              className="footer__social-link"
              target="_blank"
            >
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
        <span className="footer__copy">
          &#169; Tsaniawarda. All rights reserved
        </span>
      </footer>
    </>
  );
};

export default Footer;
