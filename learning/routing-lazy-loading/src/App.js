import React, { Component, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

const Posts = lazy(() => import("./containers/Posts"));
const User = lazy(() => import("./containers/User"));
const Welcome = lazy(() => import("./containers/Welcome"));

class App extends Component {
  render() {
    return (
      //<Router basename="/my-app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/user" component={User} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
