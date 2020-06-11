import React, { Component } from "react";
import PropTypes from "prop-types";

export class User extends Component {
  /** set default value */
  static defaultProps = {
    product: [{ name: "Brian", username: "brian", email: "brian@gmail.com" }],
  };

  /** state */
  state = {
    data: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => this.setState({ data, loading: false }));
  }

  render() {
    return (
      <>
        <div className="container">
          <p className="text-center my-1 bg-primary p-2 text-white rounded">
            Users Details | Fake Online REST API for Testing and Prototyping
          </p>
          <div className="row pt-2 pb-5">
            {this.state.loading ? (
              <div className="col-md-3 mb-4">
                <p>Loading...</p>
              </div>
            ) : (
              <>
                {this.state.data.map((product) => {
                  return (
                    <div key={product.id} className="col-md-3 mb-4">
                      <ul className="list-group">
                        <li className="list-group-item active">
                          {product.name}
                        </li>
                        <li className="list-group-item">{product.username}</li>
                        <li className="list-group-item">{product.email}</li>
                      </ul>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

User.propTypes = {
  users: PropTypes.array,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
};

export default User;
