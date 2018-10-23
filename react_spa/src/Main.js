import React, { Component } from "react";
import { Container } from "reactstrap";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Posts from "./Posts";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <h1>I Spit on Your Garage!</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
          </ul>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/posts" component={Posts}/>
          </div>
        </Container>
      </HashRouter>
    );
  }
}

export default Main;
