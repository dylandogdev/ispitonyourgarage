import React, { Component } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import DateParser from "./DateParser";
import AuthorView from "./AuthorView";

class TopPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      category: this.props.category,
      author: null,
    };
  }

  componentDidMount() {

    fetch(`https://public-api.wordpress.com/rest/v1.1/sites/153341830/posts/?category=${this.state.category}`)
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
                  <img src={post.author.avatar_URL} alt={post.author.nice_name} />
                </Col>
                <Col xs="6">
                  <h4><Link to={`/author/${post.author.nice_name}`}>{post.author.first_name} {post.author.last_name}</Link></h4>
                </Col>
              </Row>
              <hr/>
            </div>
            <div dangerouslySetInnerHTML = { {__html : post.content} }/>
            <hr/>
            <p className="postDateStamp">A post created <DateParser dateUTC={post.date} /></p>
              <Container>
                <HashRouter>
                  <div>
                    <Route path="/author/:authorName" component={AuthorView}/>
                  </div>
                </HashRouter>
              </Container>
          </div>
        )}
      </Col>
    );
  }
}

export default TopPosts;
