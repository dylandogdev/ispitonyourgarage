import React, { Component } from "react";
import { Container, Row } from 'reactstrap';
import SplashCarousel from "./SplashCarousel";
import MiniFeatureTiles from "./MiniFeatureTiles";

class Splash extends Component {

  render() {
    return(
      <Container>
        <Row>
          <SplashCarousel />
        </Row>
        <MiniFeatureTiles category="FeatureTile" />
      </Container>
    );
  }
}

export default Splash;
