import React from "react";
import { Container } from "react-bootstrap";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer px-0 px-lg-3">
      <Container fluid>
        <nav>
          <ul className="footer-menu">
            <li>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </li>
            <li>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Company
              </a>
            </li>
            <li>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Blog
              </a>
            </li>
          </ul>
          <p className="copyright text-center">
            © 2021{" "}
            <a href="https://github.com/KostadinValchev/pocket-manager">
              github
            </a>
            , made by Kostadin Valchev
          </p>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
