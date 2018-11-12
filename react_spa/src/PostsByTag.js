import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import DateParser from "./DateParser";

class PostsByTag extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {

    fetch('https://public-api.wordpress.com/rest/v1.1/sites/153341830/posts/?author=dylandogdev')
    .then(results => {
      return results.json();
    })
    .then(data => this.setState({ posts: data.posts}));
  }

  render() {
    const { posts } = this.state;

    return (
      <Col xs={{size: 8}}>
        {posts.map(post =>
          <div className="content" key={post.ID}>
            <div className="post_heading_block">
              <h1>{post.title}</h1>
              <hr/>
              <Row className="post_author_block">
                <Col xs={{size: 3, offset: 2}}>
                  <img src={post.author.avatar_URL}/>
                </Col>
                <Col xs="6">
                  <h4><a href="#">{post.author.first_name} {post.author.last_name}</a></h4>
                </Col>
              </Row>
              <hr/>
            </div>
            <div dangerouslySetInnerHTML = { {__html : post.content} }/>
            <hr/>
            <p>A post created <DateParser dateUTC={post.date} /></p>
          </div>
        )}
      </Col>
    );
  }
}

export default PostsByTag;
