import React, { Component } from "react";
import { Row } from "reactstrap";
import SideBar from "./SideBar";
import GetReviews from "./GetReviews"

class Reviews extends Component {
  render() {
    return (
      <Row>
        <GetReviews category="Reviews"/>
        <SideBar />
      </Row>
    );
  }
}

export default Reviews;
