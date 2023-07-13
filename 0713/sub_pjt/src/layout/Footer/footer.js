import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box1">
        <Link to="/MainVote">LOGO</Link>
        <div>
          <Link to="/Terms"> Privacy Policy </Link>
          <span> || </span>
          <Link to="/AboutMe"> Developer Introduction </Link>
          <span> || </span>
          <Link to="/ContactUs"> ContactUs </Link>
        </div>
        <ul>
          <li>Samsung Multi Campus | CEO : Young Sang Kim</li>
          <li>212 Tehran-Ro, Gangnam-Gu, Seoul (Yeoksam-Dong 718-5 Address)</li>
          <li>Tel 02-2222-5566 | Fax 02-2233-6655</li>
        </ul>
        <div>Copyright by Multicampus Co., Ltd. All rights reserved.</div>
      </div>
      <div className="box2">
        <div>For Help</div>
        <div>help@samsungsupport.com</div>
        <div>Contact Out Customer Support Team</div>
      </div>
    </div>
  );
};

export default Footer;
