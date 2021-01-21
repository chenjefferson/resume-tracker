import React, { Fragment, useContext } from 'react';
import AchievementContext from '../../context/achievement/AchievementContext';
import AchievementItem from './AchievementItem';

const Achievements = () => {
  const achievementContext = useContext(AchievementContext);

  const { achievements } = achievementContext;
  return (
    <Fragment>
      {achievements.map((achievement) => (
        <AchievementItem achievement={achievement} />
      ))}
    </Fragment>
  );
};

export default Achievements;
