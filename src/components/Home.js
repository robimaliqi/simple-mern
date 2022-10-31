import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">All Users</h1>
      <ul className="users">
        <li>
          <b>Name:</b> John / <b>Email:</b> john@email.com
        </li>
        <li>
          <b>Name:</b> John / <b>Email:</b> john@email.com
        </li>
        <ul></ul>
      </ul>
    </div>
  );
};

export default Home;
