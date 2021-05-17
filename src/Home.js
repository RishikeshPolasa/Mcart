import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
// import WinterC from "./WinterC";

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
    </div>
  );
}

export default Home;
