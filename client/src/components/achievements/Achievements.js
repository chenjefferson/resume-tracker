import React, { Fragment, useContext } from 'react';
import AchievementContext from '../../context/achievement/AchievementContext';

const Achievements = () => {
  const achievementContext = useContext(AchievementContext);

  const { achievements } = achievementContext;
  return (
    <Fragment>
      {achievements.map((achievement) => (
        <h3>{achievement.title}</h3>
      ))}
    </Fragment>
  );
};

export default Achievements;
