import React, { Component } from "react";
import { Col } from 'reactstrap';
import ExternalLinks from "./ExternalLinks";

class SideBar extends Component {

  render() {

    return (
      <Col xs={{size: 4}} className="sideBar">
        <img src="https://i.gifer.com/A2V.gif" alt="A friendly sppoky ghost!" />
        <hr/>
        <hr/>
        <ExternalLinks />
        <hr/>
        <hr/>
        <small>
          This site © 2018 | dylandogdev.com
          <br></br>
          Like my work? <a href="https://www.dylandogdev.com">Hire me!</a>
        </small>
      </Col>
    );

  }
}

export default SideBar;
