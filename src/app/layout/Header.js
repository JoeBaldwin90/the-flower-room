import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <nav
        className="navbar"
        aria-label="main navigation"
        style={{
          borderBottom: "solid 1px #dddddd"
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/" activeClassName="is-active">
              <span className="is-size-5">The Flower Room</span>
            </NavLink>

            <button className="button navbar-burger" onClick={this.toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div
            className={
              this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
            }}
          >
            <div className="navbar-end">
              <NavLink
                className="navbar-item"
                to="/shop"
                activeClassName="is-active"
              >
                <span className="icon has-text-info" style={{ marginRight: 5 }}>
                  <i className="fas fa-leaf"></i>
                </span>
                Shop
              </NavLink>

              <NavLink
                className="navbar-item"
                to="/info"
                activeClassName="is-active"
              >
                <span className="icon has-text-info" style={{ marginRight: 5 }}>
                  <i className="fas fa-info"></i>
                </span>
                Info
              </NavLink>
              <div className="navbar-item">
                <a
                  href="https://www.instagram.com/theflower.room/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-dark is-info"
                >
                  <span className="icon" style={{ marginRight: 5 }}>
                    <i className="fab fa-instagram"></i>
                  </span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
