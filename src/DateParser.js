import React, { Component } from 'react';
import Moment from 'react-moment';

class DateParser extends Component {
  render() {
    return(
      <Moment fromNow>{this.props.dateUTC}</Moment>
    );
  }
}

export default DateParser;
