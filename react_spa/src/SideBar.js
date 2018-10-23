import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import ThemeSwitcher from "./ThemeSwitcher";
import ExternalLinks from "./ExternalLinks";

class SideBar extends Component {

  render() {

    return (
      <Col xs={{size: 4}} className="sideBar">
        <h3>Text Sample</h3>
        <hr/>
        <ThemeSwitcher />
        <hr/>
        <ExternalLinks />
        <hr/>
      </Col>
    );

  }
}

export default SideBar;
