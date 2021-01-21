import React, { Fragment } from 'react';
import Achievements from '../achievements/Achievements';

const Home = () => {
  return (
    <Fragment>
      <div>{/* Achievement Form */}</div>
      <div className='grid-2'>
        <Achievements />
      </div>
    </Fragment>
  );
};

export default Home;
