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
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
                marginRight: 15
              }}
              src="https://images.vexels.com/media/users/3/156051/isolated/preview/72094c4492bc9c334266dc3049c15252-flat-flower-icon-flower-by-vexels.png"
              width="30px"
              alt=""
            />
            <span>The Flower Room</span>
          </a>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/" activeClassName="is-active">
              <img
                style={{
                  borderTopLeftRadius: "50%",
                  borderTopRightRadius: "50%",
                  borderBottomLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  marginRight: 15
                }}
                src="https://image.flaticon.com/icons/png/512/25/25694.png"
                width="30px"
                alt=""
              />
              <span>Home</span>
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/shop"
              activeClassName="is-active"
            >
              <span
                className="icon has-text-primary"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-code"></i>
              </span>
              Shop
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/info"
              activeClassName="is-active"
            >
              <span
                className="icon has-text-primary"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-code"></i>
              </span>
              Info
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
