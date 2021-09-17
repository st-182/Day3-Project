import React from "react";

const Header = () => {
  return (
    <header>
      <div>LOGO</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          <li>
            <a href="/logIn-signUp">Log In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
