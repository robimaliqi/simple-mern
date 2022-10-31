import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App"></div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Form} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
