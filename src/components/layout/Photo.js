import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class Photo extends Component {
  state = {
    photo: [
      {
        id: '1',
        sol: '1000',
        camera: {
          id: 'id',
          name: 'FHAZ',
          img_src:
            'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
        },
      },
      {
        id: '2',
        sol: '1000',
        camera: {
          id: 'id',
          name: 'FHAZ',
          img_src:
            'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG',
        },
      },
      {
        id: '3',
        sol: '1000',
        camera: {
          id: 'id',
          name: 'FHAZ',
          img_src:
            'https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631140305211E02_DXXX.jpg',
        },
      },
    ],
  };
  render() {
    const { photo } = this.state;
    return (
      <Carousel>
        {photo.map((photos) => (
          <div key={photos.id}>
            <img src={photos.camera.img_src} alt="" />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default Photo;

{
  /* <div className="each-slide">
        {this.state.photo.map((photos) => (
          <div key={photos.id}>
            <img src={photos.camera.img_src} alt="" />
          </div>
        ))}
      </div> */
}
