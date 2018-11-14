import React, { Component } from "react";
import {Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ExternalLinks extends Component {

  render() {
    return(
      <div className="externalLinkBar">
      <div>
        <Row>
          <Col className="externalLinks">
            <h4>Follow us!</h4>
          </Col>
        </Row>
        <Row>
          <Col className="icons">
            <a href="http://www.fb.me/ispitonyourgarage">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
          </Col>
          <Col className="icons">
            <a href="http://www.instagram.com">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </Col>
          <Col className="icons">
            <a href="http://www.tumblr.com/ispitonyourgarage">
              <FontAwesomeIcon icon={['fab', 'tumblr']} />
            </a>
          </Col>
        </Row>
        <hr/>
        <hr/>
        <Row>
          <Col className="externalLinks">
            <h4>Other sites we like...</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="http://www.facultyofhorror.com/">
              The Faculty of Horror
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://www.rue-morgue.com/">
              Rue Morgue
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://fangoria.com/">
              Fangoria
            </a>
          </Col>
        </Row>
        <hr/>
        <hr/>
        <Row>
          <Col className="externalLinks">
            <h4>Spooky Film Fests!</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://www.knoxvillehorrorfest.com/">
              Knoxville Horror Film Fest
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://www.salemhorror.com/">
              Salem Horror Fest
            </a>
          </Col>
        </Row>
        <hr/>
        <hr/>
        <Row>
          <Col className="podcastWidget">
            <h4>Podcasts We ♡</h4>
            <iframe title="Podcasts we like" src="https://widgets.itunes.apple.com/widget.html?c=us&brc=000000&blc=000000&trc=000000&tlc=000000&d=A selection of ooky spooky podcasts to help get you in the Halloween spirit!&t=Spooky Podcasts that We Like&m=podcast&e=podcast&w=250&h=300&ids=591499834,536258179,406250030,978052928,1279361017&wt=playlist&partnerId=&affiliate_id=&at=&ct="></iframe>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default ExternalLinks;
