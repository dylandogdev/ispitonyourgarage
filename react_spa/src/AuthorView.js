import React, { Component } from "react";
import { Row } from "reactstrap";
import TopPosts from "./TopPosts";
import SideBar from "./SideBar";
import PostsByAuthor from "./PostsByAuthor";

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <PostsByAuthor authorName={this.props.match.params.authorName} />
        <SideBar />
      </Row>
    );
  }
}

export default Posts;
