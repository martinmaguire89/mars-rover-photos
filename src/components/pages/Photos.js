import React, { Component } from 'react';
import Rovers from '../layout/Rovers';
import Cameras from '../layout/Cameras';
import Photo from '../layout/Photo';

class Photos extends Component {
  render() {
    return (
      <div className="container">
        <Rovers />
        <div className="card">
          <Photo />
        </div>
      </div>
    );
  }
}

export default Photos;
