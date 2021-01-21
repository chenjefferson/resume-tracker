import React, { Fragment, useContext } from 'react';
import AchievementContext from '../../context/achievement/AchievementContext';
import AchievementItem from './AchievementItem';

const Achievements = () => {
  const achievementContext = useContext(AchievementContext);

  const { achievements } = achievementContext;
  return (
    <div>
      <h2 className='text-primary'>Achievements</h2>
      {achievements.map((achievement) => (
        <AchievementItem achievement={achievement} />
      ))}
    </div>
  );
};

export default Achievements;
