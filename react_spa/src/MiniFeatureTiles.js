import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Route, NavLink, HashRouter } from "react-router-dom";
import DateParser from "./DateParser";
import Post from "./Post";

class MiniFeatureTiles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      category: this.props.category,
    };
  }

  componentDidMount() {

    fetch(`https://public-api.wordpress.com/rest/v1.1/sites/153341830/posts/?number=3&category=${this.state.category}`)
    .then(results => {
      return results.json();
    })
    .then(data => this.setState({ posts: data.posts}));
  }

  render() {
    const { posts } = this.state;

    return (
        <Row>
          {posts.map(post =>

            <Col xs={{size:4}} className="featureTile" key={post.ID}>
            <Card className="featureCard">
              <CardImg top width="100%" src={post.featured_image} alt="Card image cap" className="reviewImage"/>
              <CardBody>
              <CardTitle dangerouslySetInnerHTML = { {__html : post.title} }></CardTitle>
              <CardSubtitle>Subtitle</CardSubtitle>
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
    );
  }
}
export default MiniFeatureTiles;
