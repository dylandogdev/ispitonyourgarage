import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import DateParser from "./DateParser";

class PostsByAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      authorName: this.props.authorName,
    };
  }

  componentDidMount() {

    fetch(`https://public-api.wordpress.com/rest/v1.1/sites/153341830/posts/?category=post&author=${this.state.authorName}`)
    .then(results => {
      return results.json();
    })
    .then(data => this.setState({ posts: data.posts}));
  }

  render() {

    const posts = this.state.posts;

    if (posts === null) {
      return <div>Loading..</div>;
    }

    return (
      <Col xs={{size: 8}}>
        {this.state.posts.map(post =>
          <div className="content" key={post.ID}>
            <div className="post_heading_block">
              <h1>{post.title}</h1>
              <hr/>
              <Row className="post_author_block">
                <Col xs={{size: 3, offset: 2}}>
                  <img src={post.author.avatar_URL} alt={post.author.nice_name}/>
                </Col>
                <Col xs="6">
                  <h4>{post.author.first_name} {post.author.last_name}</h4>
                </Col>
              </Row>
              <hr/>
            </div>
            <div dangerouslySetInnerHTML = { {__html : post.content} }/>
            <hr/>
            <p className="postDateStamp">A post created <DateParser dateUTC={post.date} /></p>
          </div>
        )}
      </Col>
    );
  }
}

export default PostsByAuthor;
