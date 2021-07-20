import React from 'react';

const Rovers = () => {
  return (
    <div className="Rovers">
      <h1>Rovers</h1>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            Curiosity
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-two">
            Opportunity
          </a>{' '}
        </div>
        <div className="col-md-3 col-sm-3 col-xs-6">
          {' '}
          <a href="#" className="btn btn-sm animated-button rover-one">
            Spirit
          </a>{' '}
        </div>
      </div>
    </div>
  );
};

export default Rovers;
