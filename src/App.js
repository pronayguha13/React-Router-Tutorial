import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetails from "./itemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/" exact component={Home} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Homepage</h1>;
};

export default App;
