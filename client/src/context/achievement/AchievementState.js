import React, { useReducer } from 'react';
import uuid from 'uuid';
import AchievementContext from './AchievementContext';
import achievementReducer from './achievementReducer';
import {
  ADD_ACHIEVEMENT,
  DELETE_ACHIEVEMENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ACHIEVEMENT,
  FILTER_ACHIEVEMENTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const AchievementState = (props) => {
  const initialState = {
    achievements: [
      {
        id: 1,
        title: 'Ran With Dog',
        summary: 'I took my dog for a run',
        type: 'Project',
      },
      {
        id: 2,
        title: 'Interned at In N Out',
        summary: 'In N Out is incredible',
        type: 'Internship',
      },
      {
        id: 3,
        title: 'Built a Website',
        summary: 'I built a website from scratch',
        type: 'Project',
      },
      {
        id: 4,
        title: 'Got Hired',
        summary: 'I got hired at a place',
        type: 'Event',
      },
      {
        id: 5,
        title: 'Lived My Life',
        summary: 'Then the rest of my life happened',
        type: 'Event',
      },
    ],
  };

  const [state, dispatch] = useReducer(achievementReducer, initialState);

  // add achievement

  // delete achievement

  // set current achievement

  // clear current achievement

  // update current achievement

  // filter achievements

  // clear filter

  return (
    <AchievementContext.Provider
      value={{
        achievements: state.achievements,
      }}
    >
      {props.children}
    </AchievementContext.Provider>
  );
};

export default AchievementState;
