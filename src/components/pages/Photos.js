import React, { Component } from 'react';
import Rovers from '../layout/Rovers';
import Cameras from '../layout/Cameras';
import Photo from '../layout/Photo';

class Photos extends Component {
  render() {
    return (
      <div>
        <Rovers />
        <br></br>
        <Cameras />
        <br></br>
        <Photo />
      </div>
    );
  }
}

export default Photos;
