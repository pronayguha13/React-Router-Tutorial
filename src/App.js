import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./context/LoginProvider";
import "./App.css";
import Nav from "./Components/Nav";
import Routes from "./routes";

function App() {
  return (
    <LoginProvider>
      <Router>
        <div className="App">
          <Nav />
          <Routes />
        </div>
      </Router>
    </LoginProvider>
  );
}

export default App;
