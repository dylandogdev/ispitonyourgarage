import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { Route, NavLink, Link, HashRouter } from "react-router-dom";
import DateParser from "./DateParser";
import Reviews from "./Reviews";
import AuthorView from "./AuthorView";
import axios from "axios";

class PostById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      postId: this.props.postId
    };
  }

  componentDidMount() {

    axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/153341830/posts/${this.state.postId}`)
    .then(response => { this.setState({ post:response.data }) });
    /*.then(data => this.setState({ post: data}));*/
  }

  render() {
    const post = this.state.post;

    if (post === null) {
      return <div>Loading..</div>;
    }

    return (
      <Col xs={{size: 8}}>
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
          <div className="post_footer">
            <Button><NavLink to='/reviews'>Go Back</NavLink></Button>
          </div>
          </div>
          <Container>
            <HashRouter>
              <div>
                <Route path="/reviews" component={Reviews}/>
                <Route path="/author/:authorName" component={AuthorView}/>
              </div>
            </HashRouter>
          </Container>
      </Col>
    );
  }
}

export default PostById;
