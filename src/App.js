import React from "react";
import Nav from "./components/Nav/Nav";
import Coin from "./components/Coin";
import WashFold from "./components/Washfold";
import Commercial from "./components/Commercial";
import About from "./components/About";
import Contact from "./components/Contact";
import Promise from "./components/Promise";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./components/static/hll_logo copy.png";
import CalculatorForm from "./WashFoldCalculator/CalculatorForm";
import Shop from "./components/Shop/Shop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav image={logo} />
        <Switch>
          <Route path="/" exact>
            <Promise />
            <About />
            <Coin />
            <WashFold />
            <Commercial />
            <Contact />
          </Route>
          <Route path="/calculator">
            <CalculatorForm />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
