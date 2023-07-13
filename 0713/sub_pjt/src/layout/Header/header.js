import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="wrapper">
        <li>
          <Link to="/MainVote">LOGO</Link>
        </li>
        <li>
          <Link to="/MainVote">Vote</Link>
        </li>
        <li>
          <Link to="/MyVote">MyVote</Link>
        </li>
        <li>
          <Link to="/CreateVote">Create a Vote</Link>
        </li>
        <li>
          <Link to="/SearchVote">SearchVote</Link>
        </li>
        <li>
          <Link to="/Auth">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
