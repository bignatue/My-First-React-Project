import React, { Component } from "react";

let data = [
  {
    svg: "http://www.w3.org/2000/svg",
    title: "Heading",
    desc:
      "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    attr: "#",
    btnLabel: "Read more",
  },
  {
    svg: "http://www.w3.org/2000/svg",
    title: "Heading",
    desc:
      "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    attr: "#",
    btnLabel: "Read more",
  },
  {
    svg: "http://www.w3.org/2000/svg",
    title: "Heading",
    desc:
      "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    attr: "#",
    btnLabel: "Read more",
  },
];

const MarketingItem = ({ mar }) => {
  return (
    <>
      {mar.map((m, i) => (
        <div key={i} className="col-md-4">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns={m.svg}
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
          </svg>
          <h3>{m.title}</h3>
          <p>{m.desc}</p>
          <p>
            <a className="btn btn-primary btn-sm" href={m.attr} role="button">
              {m.btnLabel} »
            </a>
          </p>
        </div>
      ))}
    </>
  );
};

class Marketing extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row py-5 text-center">
            <MarketingItem mar={data} />
          </div>
          <hr />
        </div>
      </>
    );
  }
}

export default Marketing;
