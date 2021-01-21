import React from 'react';

const AchievementItem = ({ achievement }) => {
  const { title, summary, actions, type, begin, end } = achievement;
  return (
    <div className='card card-lr bg-light'>
      <div>
        <h3 className='text-primary text-left'>{title}</h3>
        {summary && <p>{summary}</p>}
        <ul>{actions && actions.map((action) => <li>{action}</li>)}</ul>

        <span className='badge badge-primary'>
          {type.replace(/^\w/, (c) => c.toUpperCase())}
        </span>
      </div>
      <div>
        <p>
          <button className='btn btn-dark btn-sm'>Edit</button>
          <button className='btn btn-danger btn-sm'>Delete</button>
        </p>
      </div>
    </div>
  );
};

export default AchievementItem;
