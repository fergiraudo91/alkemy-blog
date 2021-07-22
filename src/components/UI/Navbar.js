import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { clearAllPosts } from "../../actions/posts";

export const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(clearAllPosts())
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#CCC" }}
    >
      <Link className="navbar-brand" to="/">
        Blog
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">
              <i className="fas fa-home"></i> Home
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/new" activeClassName="active">
              <i className="fas fa-plus"></i> Add Post
            </NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-link btn" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
