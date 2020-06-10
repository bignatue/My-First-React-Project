import React, { Component } from "react";

const name = "Brian Bantigue";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3">
          <div className="container text-center">
            <hr />
            <small>
              <span className="text-muted">All Rights Reserved | {name}</span>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
