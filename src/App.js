import React, { Component } from "react";
import Nav from "./Components/Nav";
import User from "./UserApi/User";
import Header from "./Header/Header";
import Marketing from "./Marketing/Marketing";
import FeatureTextLeft from "./FeatureTextLeft/FeatureTextLeft";
import FeatureTextRight from "./FeatureTextRight/FeatureTextRight";
import Block from "./Block/Block";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" exact component={User} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <>
    <Header />
    <Marketing />
    <FeatureTextLeft />
    <FeatureTextRight />
    <Block />
    <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5">
            <h1>About</h1>
            <p>Welcome to about page.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5">
            <h1>Contact</h1>
            <p>Welcome to contact page.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Error() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5">
            <h1>404</h1>
            <p className="text-danger">Oops!!! page not found.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
