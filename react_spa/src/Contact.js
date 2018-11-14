import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import SideBar from "./SideBar";

class Contact extends Component {
  render() {
    return (
      <Row>
        <Col xs={{size:8}}>
          <div className="contactContent">
            <div>
              <h6>
                It's 2018. Just contact us on social media like a normal person.
              </h6>
            </div>
          </div>
        </Col>
        <SideBar />
      </Row>
    );
  }
}

export default Contact;
