import React, { Component } from "react";

let data = [
  {
    title: "Heading",
    desc:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    attr: "#",
    btnLabel: "Continue reading",
  },
];

const Cont = ({ t }) => {
  return (
    <>
      {t.map((b, i) => (
        <div key={i} className="col-md-12 px-0">
          <h1 className="display-4 font-italic">{b.title}</h1>
          <p className="lead mb-0">{b.desc}</p>
          <a href={b.attr} className="text-white font-weight-bold">
            {b.btnLabel}...
          </a>
        </div>
      ))}
    </>
  );
};

class Header extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
            <Cont t={data} />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
