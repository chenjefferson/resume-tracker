import React, { Fragment } from 'react';
import Achievements from '../achievements/Achievements';
import AchievementForm from '../achievements/AchievementForm';

const Home = () => {
  return (
    <Fragment>
      <div className='grid-2'>
        <AchievementForm />
        <Achievements />
      </div>
    </Fragment>
  );
};

export default Home;
