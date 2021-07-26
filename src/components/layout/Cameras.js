import React from 'react';
import Rovers from './Rovers';

const Cameras = () => {
  return (
    <div className="Cameras">
      <h1>Cameras</h1>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            FHAZ
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-two">
            RHAZ
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            MAST
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            CHEMCAM
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-two">
            MAHLI
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            MARDI
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            NAVCAM
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-two">
            PANCAM
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            MINITES
          </a>{' '}
        </div>
      </div>
    </div>
  );
};

export default Cameras;

{
  /* <div>
        <button className="btn btn-light btn-block">FHAZ</button>
        <button className="btn btn-light btn-block">RHAZ</button>
        <button className="btn btn-light btn-block">MAST</button>
        <button className="btn btn-light btn-block">CHEMCAM</button>
        <button className="btn btn-light btn-block">MAHLI</button>
        <button className="btn btn-light btn-block">MARDI</button>
        <button className="btn btn-light btn-block">NAVCAM</button>
        <button className="btn btn-light btn-block">PANCAM</button>
        <button className="btn btn-light btn-block">MINITES</button>
      </div> */
}
