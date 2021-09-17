import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/logIn-signUp">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
