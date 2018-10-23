import React, { Component } from "react";
import {Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ExternalLinks extends Component {

  render() {
    return(
      <div>
        <Row>
          <Col>
            <h4>Follow us!</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
          </Col>
          <Col>
            <a href="#">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </Col>
          <Col>
            <a href="#">
              <FontAwesomeIcon icon={['fab', 'tumblr']} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Other sites we like..</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">
              The Faculty of Horror
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">
              Rue Morgue
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">
              Fangoria
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Spooky Film Fests!</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">
              Knoxville Horror Film Fest
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">
              Salem Horror Fest
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <iframe src="https://widgets.itunes.apple.com/widget.html?c=us&brc=FFFFFF&blc=FFFFFF&trc=FFFFFF&tlc=FFFFFF&d=A selection of ooky spooky podcasts to help get you in the Halloween spirit!&t=Spooky Podcasts that We Like&m=podcast&e=podcast&w=250&h=300&ids=591499834,536258179,406250030,978052928,1279361017&wt=playlist&partnerId=&affiliate_id=&at=&ct="></iframe>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExternalLinks;
