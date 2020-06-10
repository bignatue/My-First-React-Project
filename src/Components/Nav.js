import React, { Component } from "react";

let navList = [
  { name: "Home", attr: "index.html" },
  { name: "About", attr: "" },
  { name: "Menu", attr: "" },
  { name: "Contact", attr: "" },
];

const NavItem = ({ name, attr }) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={attr}>
          {name}
        </a>
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

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
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
}

export default Nav;
