import React, { Component } from "react";

let data = [
  {
    title: "Bottom Navbar example",
    desc:
      "This example is a quick exercise to illustrate how the bottom navbar works.",
    attr: "#",
    btnLabel: "View navbar docs",
  },
];

const Cont = ({ t }) => {
  return (
    <>
      {t.map((b, i) => (
        <div key={i} className="jumbotron mt-5">
          <h1>{b.title}</h1>
          <p className="lead">{b.desc}</p>
          <a className="btn btn-lg btn-primary" href={b.attr} role="button">
            {b.btnLabel} »
          </a>
        </div>
      ))}
    </>
  );
};

class Block extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Cont t={data} />
        </div>
      </div>
    );
  }
}

export default Block;
