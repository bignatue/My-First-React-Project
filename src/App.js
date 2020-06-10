import React, { Component } from "react";
import Nav from "./Components/Nav";
import Header from "./Header/Header";
import Marketing from "./Marketing/Marketing";
import FeatureTextLeft from "./FeatureTextLeft/FeatureTextLeft";
import FeatureTextRight from "./FeatureTextRight/FeatureTextRight";
import Block from "./Block/Block";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Marketing />
        <FeatureTextLeft />
        <FeatureTextRight />
        <Block />
        <Footer />
        {/**
         */}
      </div>
    );
  }
}

export default App;
