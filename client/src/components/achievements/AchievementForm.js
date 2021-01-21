import React, { useContext, useState } from 'react';
import AchievementContext from '../../context/achievement/AchievementContext';

const AchievementForm = () => {
  const achievementContext = useContext(AchievementContext);

  const onChange = () => {};
  const onSubmit = () => {};

  const [achievement, setAchievement] = useState({
    title: '',
    summary: '',
    actions: [],
    type: '',
    begin: Date.now,
    end: Date.now,
  });
  const { title, summary, actions, type, begin, end } = achievement;

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Achievement</h2>
      <input
        type='text'
        placeholder='Name'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Summary'
        name='summary'
        value={summary}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Type'
        name='type'
        value={type}
        onChange={onChange}
      />
      <input type='submit' value='Add' className='btn btn-success' />
    </form>
  );
};

export default AchievementForm;
