import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App"></div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/register" component={Form} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
