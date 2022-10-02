import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div
      className="ui ui-header secondary pointing menu"
      style={{
        background: theme.background,
        color: theme.text,
      }}
    >
      <button
        className="ui button"
        style={{
          background: theme.background,
          color: theme.text,
        }}
      >
        <Link to="/" className="active item">
          Home
        </Link>
      </button>
      <button
        className="ui button"
        style={{
          background: theme.background,
          color: theme.text,
        }}
      >
        <Link to="/about" className="item">
          About
        </Link>
      </button>
      <button
        className="ui button"
        style={{
          background: theme.background,
          color: theme.text,
        }}
      >
        <Link to="/contact" className="item">
          Contact
        </Link>
      </button>
      <button
        className="ui button"
        style={{
          background: theme.background,
          color: theme.text,
        }}
      >
        <Link to="/user" className="item">
          Card
        </Link>
      </button>
      <button
        className="ui button"
        style={{
          background: theme.background,
          color: theme.text,
        }}
      >
        <Link to="/blog" className="item">
          Blog
        </Link>
      </button>

      <div className="right menu">
        <Link to="/" className="ui item" onClick={changeAuthStatus}>
          {isLoggedIn ? "Logout" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default Header;
