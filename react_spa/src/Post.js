import React, { Component } from "react";
import { Row } from "reactstrap";
import SideBar from "./SideBar";
import PostById from "./PostById"

class Post extends Component {
// eslint-disable-next-line
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
