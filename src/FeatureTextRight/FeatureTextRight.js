import React, { Component } from "react";

let data = [
  {
    title: "Oh yeah, it’s that good.",
    titleMuted: "See for yourself.",
    desc:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
    attr: "#",
    btnLabel: "Read more",
    img: "http://www.w3.org/2000/svg",
  },
];

const Cont = ({ t }) => {
  return (
    <>
      {t.map((b, i) => (
        <div key={i} className="row align-items-center py-5">
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns={b.img}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading">
              {b.title}
              <span className="text-muted">{b.titleMuted}</span>
            </h2>
            <p className="lead">{b.desc}</p>
            <p>
              <a className="btn btn-primary" href={b.attr} role="button">
                {b.btnLabel} »
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

class FeatureTextRight extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Cont t={data} />
          <hr />
        </div>
      </div>
    );
  }
}

export default FeatureTextRight;
