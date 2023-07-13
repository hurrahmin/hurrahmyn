import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="wrapper">
        <li>
          <Link to="/MainVote" className="font">LOGO</Link>
        </li>
        <li>
          <Link to="/MainVote" className="font">VOTE</Link>
        </li>
        <li>
          <Link to="/MyVote" className="font">My VOTE</Link>
        </li>
        <li>
          <Link to="/CreateVote" className="font">Create a VOTE</Link>
        </li>
        <li>
          <Link to="/SearchVote" className="font">Search VOTE</Link>
        </li>
        <li>
          <Link to="/Auth" className="font">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
