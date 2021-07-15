import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import MedianLight from "assets/median.svg";
import MedianDark from "assets/medianDark.svg";
import TwitterLight from "assets/twitter.svg";
import TwitterDark from "assets/twitterDark.svg";
import TelegramLight from "assets/telegram.svg";
import TelegramDark from "assets/telegramDark.svg";
import InstagramLight from "assets/instagram.svg";
import InstagramDark from "assets/instagramDark.svg";
import "./index.scss";
import { ThemeContext } from "context/themeContext";

const Footer = () => {
  const data: any = useContext(ThemeContext);

  return (
    <div className="footer-container">
      <Row className="custom-footer-row">
        <Col xs={12} md={6} className="footer-links">
          <p className="footer-nav-auto">Docs</p>
          <p className="footer-nav-auto">Contact Us</p>
        </Col>

        <Col xs={12} md={6} className="footer-social-media">
          <img
            alt="Logo"
            src={data.theme === "light" ? MedianLight : MedianDark}
            className="footer-logo"
          />
          <img
            alt="Logo"
            src={data.theme === "light" ? TwitterLight : TwitterDark}
            className="footer-logo"
          />
          <img
            alt="Logo"
            src={data.theme === "light" ? InstagramLight : InstagramDark}
            className="footer-logo"
          />
          <img
            alt="Logo"
            src={data.theme === "light" ? TelegramLight : TelegramDark}
            className="footer-logo"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
