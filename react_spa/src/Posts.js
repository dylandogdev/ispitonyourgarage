import React, { Component } from "react";
import { Row } from "reactstrap";
import TopPosts from "./TopPosts";
import SideBar from "./SideBar";

class Posts extends Component {
  render() {
    return (
      <Row>
        <TopPosts />
        <SideBar />
      </Row>
    );
  }
}

export default Posts;
