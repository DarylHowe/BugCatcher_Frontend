import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import Page404 from "./pages/Page404";
import BugsPage from "./pages/Bugs";
import ProjectsPage from "./pages/Projects";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/404" component={Page404}></Route>
          <Route exact path="/bugs" component={BugsPage}></Route>
          <Route exact path="/projects" component={ProjectsPage}></Route>

          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
