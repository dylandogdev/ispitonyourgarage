import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Post from "./Post";

class GetReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      category: this.props.category,
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
        <Row>
          {posts.map(post =>

            <Col xs={{size:6}} className="reviewTile" key={post.ID}>
            <Card className="reviewCard">
              <CardImg top width="100%" src={post.featured_image} alt="Card image cap" className="reviewImage"/>
              <CardBody>
              <CardTitle dangerouslySetInnerHTML = { {__html : post.title} }></CardTitle>
              <CardText dangerouslySetInnerHTML = { {__html : post.excerpt} }></CardText>
                <Button><NavLink to={`/post/${post.ID}`}>Read More!</NavLink></Button>
              </CardBody>
            </Card>
            <Container>
              <HashRouter>
                <div>
                  <Route path="/post/:postId" component={Post}/>
                </div>
              </HashRouter>
            </Container>
            </Col>
          )}
        </Row>
      </Col>
    );
  }
}

export default GetReviews;
