import React from "react";
import Navbar from "./Navbar";

function HeaderContainer() {
  return (
    <div className="headerContainer">
      <Navbar></Navbar>
      <h1> BugCatcher </h1>
      <h3>
        {" "}
        The only place where its okay to hunt, track, catch and kill bugs.. so
        nasty..
      </h3>
    </div>
  );
}

export default HeaderContainer;
