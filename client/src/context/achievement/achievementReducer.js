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

export default (state, action) => {
  switch (action.type) {
    case ADD_ACHIEVEMENT:
      return {
        ...state,
        achievements: [...state.achievements, action.payload],
      };
    default:
      throw new Error('achievementReducer did not recognize operation');
  }
};
