import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let navList = [
  { name: "Home", attr: "/" },
  { name: "User Api", attr: "/user" },
  { name: "About", attr: "/about" },
  { name: "Contact", attr: "/contact" },
];

const NavItem = ({ name, attr }) => {
  return (
    <>
    <li className="nav-item">
      <Link className="nav-link" to={attr}>{name}</Link>
    </li>
    </>
  );
};

const Menu = ({ item }) => {
  return (
    <>
      {item.map((n, i) => (
        <NavItem key={i} name={n.name} attr={n.attr} />
      ))}
    </>
  );
};

function Nav() {
  return (
    <div>
      <div className="container mb-2">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <Menu item={navList} />
            </ul>
            <span className="navbar-text">
              <button type="button" className="btn btn-danger btn-sm">
                Order Now
              </button>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
