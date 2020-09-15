import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./../StateManagement/Actions/index";
import { Link } from "react-router-dom";

function Login() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="loginContainer">
        <h1> Welcome to BugCatcher! </h1>
        <h3>Login below and catching bugs.</h3>
        <br></br>
        <Link to="/" className="linkLogin" onClick={() => dispatch(signIn())}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
