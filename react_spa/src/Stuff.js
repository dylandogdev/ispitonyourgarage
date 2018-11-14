import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import SideBar from "./SideBar";

class Stuff extends Component {
  render() {
    return (
      <Row>
        <Col xs={{size:8}}>
          <h2>About Our Site</h2>
          <img src="https://attitude.co.uk/media/images/2015/06/rose.gif"
            alt="Tatum Riley's iconic line in the movie Scream was the inspiriation for our site's name!" />
        </Col>
        <SideBar />
      </Row>
    );
  }
}

export default Stuff;
