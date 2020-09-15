import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./../../StateManagement/Actions/index";

function Navbar() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  let Nav;
  if (isLogged) {
    Nav = (
      <div className="navbar">
        <br></br>
        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/projects" className="link">
          Projects
        </Link>

        <Link to="/bugs" className="link">
          Bugs
        </Link>

        <Link to="/login" className="link" onClick={() => dispatch(signIn())}>
          Logout
        </Link>
      </div>
    );
  } else {
    Nav = (
      <div className="navbar">
        <br></br>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
      </div>
    );
  }

  return <div> {Nav} </div>;
}

export default Navbar;
