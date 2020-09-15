import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./../Actions/index";

function ReduxExample() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      Counter: {counter} <br></br>
      Is Logged: {isLogged.toString()}
      {isLogged ? <p> I am now logged in! </p> : <p> I am now logged out!</p>}
      <button onClick={() => dispatch(increment(5))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(signIn())}> Login / Logout </button>
    </div>
  );
}

export default ReduxExample;
