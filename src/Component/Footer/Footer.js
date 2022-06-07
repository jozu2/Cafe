import React from 'react';
import './Footer.scss';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footerContents">
      <div className="footer1">
        <div className="fdiv1">
          <p>
            Want more Sweets? Sign up for SMS and get 20% OFF sent right to your
            phone!
          </p>
        </div>
        <div className="fdiv2">
          <input placeholder="Enter your email"></input>
          <button>Email Now</button>
          <p>
            By signing up via text, you agree to receive recurring automated
            promotional and personalized marketing text messages e.g. cart
            reminders from Cafe Plum at the Email used when signing up. Consent
            is not a condition of any purchase. Msg & data rates may apply. View
            Terms & Privacy.
          </p>
        </div>
      </div>
      <div className="footer2">
        <div className="foot1">
          <h4>Shop</h4>
          <li>Cake</li>
          <li>Coffee</li>
          <li>Milktea</li>
          <li>Donuts</li>
          <li>Waffle</li>
          <li>Pie</li>
        </div>
        <div className="foot2">
          <h4>Shop</h4>
          <li>Cake</li>
          <li>Coffee</li>
          <li>Milktea</li>
          <li>Donuts</li>
          <li>Waffle</li>
          <li>Pie</li>
        </div>

        <div className="foot3">
          <h4>Shop</h4>
          <li>Cake</li>
          <li>Coffee</li>
          <li>Milktea</li>
          <li>Donuts</li>
          <li>Waffle</li>
          <li>Pie</li>
        </div>

        <div className="footContact">
          <h4>FOLLOW OUR JOURNEY</h4>
          <Link to="/">
            <BsFacebook />
          </Link>
          <Link to="/">
            <BsFacebook />
          </Link>
          <Link to="/">
            <BsFacebook />
          </Link>
          <Link to="/">
            <BsFacebook />
          </Link>

          <h5>NEED TO GET IN TOUCH?</h5>
          <Link to="/">
            <p>it.joshuamelendre@gmail.com</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
