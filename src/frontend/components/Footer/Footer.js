import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function Footer () {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h2>Dice Drinks and Duds</h2>
          <div className="socials">
            <Link to="https://github.com/Bhammock33">
              <p>
                <GitHubIcon />
              </p>
            </Link>
            <Link to="https://www.linkedin.com/in/bennett-hammock/">
              <p>
                <LinkedInIcon />
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <p className="title">Quick Links</p>
          <div className="listItems">
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="/wishlist">
              <p>Wishlist</p>
            </Link>
            <Link to="/cart">
              <p>Cart</p>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <p className="title">Contact Us</p>
          <div className="contact-list">
            <div className="contact-mode">
              <div className="contact-icon">
                <FmdGoodIcon />
              </div>
              <p>Fayetteville, NC</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <CallIcon />
              </div>
              <p>(407)595-0745</p>
            </div>
            <div className="contact-mode">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <p>Bennetthammock@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span>No Copyright © 2023 {" "}</span>
        </div>
      </div>
    </>
  );
};
export {Footer};