import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter,FaInstagram,FaGooglePlusG } from "react-icons/fa";
function Footer() {
  return (
    <div style={{marginTop:"20px"}}>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>Services</h4>
                <ul>
                  <li><Link to="/">Lorem Ipsum</Link></li>
                  <li><Link to="/">Simply dummy text</Link></li>
                  <li><Link to="/">The printing and typesetting </Link></li>
                  <li><Link to="/">Standard dummy text</Link></li>
                  <li><Link to="/">Type specimen book</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Page Link</h4>
                <ul>
                  <li><Link to="/">Lorem Ipsum</Link></li>
                  <li><Link to="/">Simply dummy text</Link></li>
                  <li><Link to="/">The printing and typesetting </Link></li>
                  <li><Link to="/">Standard dummy text</Link></li>
                  <li><Link to="/">Type specimen book</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe today</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
              <div className="social_profile">
                <ul>
                  <li><Link to="/"><FaFacebook /></Link></li>
                  <li><Link to="/"><FaTwitter /></Link></li>
                  <li><Link to="/"><FaInstagram /></Link></li>
                  <li><Link to="/"><FaGooglePlusG /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">&copy; 2024 <Link to={'/'}>Your Choice</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

