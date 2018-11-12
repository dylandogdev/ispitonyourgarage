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
import Reviews from "./Reviews";
import SideBar from "./SideBar";
import Post from "./Post";
import AuthorView from "./AuthorView";
import Splash from "./Splash";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <li><NavLink to="/posts">All Posts</NavLink></li>
            <li><NavLink to="/about">About Our Site</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div>
            <Route exact path="/" component={Splash}/>
            <Route path="/about" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/post/:postId" component={Post}/>
            <Route path="/author/:authorName" component={AuthorView}/>
          </div>
        </Container>
      </HashRouter>
    );
  }
}

export default Main;
