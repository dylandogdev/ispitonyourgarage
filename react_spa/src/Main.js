import React, { Component } from "react";
import { Container } from "reactstrap";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Posts from "./Posts";
import Reviews from "./Reviews";
import Post from "./Post";
import AuthorView from "./AuthorView";
import Splash from "./Splash";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <ul className="header">
            <li><NavLink exact to="/" activeStyle={{background: 'none', color: 'orange', textDecoration: 'none'}}>Home</NavLink></li>
            <li><NavLink to="/reviews" activeStyle={{background: 'none', color: 'orange', textDecoration: 'none'}}>Reviews</NavLink></li>
            <li><NavLink to="/posts" activeStyle={{background: 'none', color: 'orange', textDecoration: 'none'}}>All Posts</NavLink></li>
            <li><NavLink to="/about" activeStyle={{background: 'none', color: 'orange', textDecoration: 'none'}}>About Our Site</NavLink></li>
            <li><NavLink to="/contact" activeStyle={{background: 'none', color: 'orange', textDecoration: 'none'}}>Contact</NavLink></li>
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
