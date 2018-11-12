import React, { Component } from "react";
import { Row } from "reactstrap";
import TopPosts from "./TopPosts";
import SideBar from "./SideBar";
import PostById from "./PostById"

class Post extends Component {

  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <Row>
        <PostById postId={this.props.match.params.postId}/>
        <SideBar />
      </Row>
    );
  }
}

export default Post;
