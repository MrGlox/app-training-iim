import React from 'react';

const Item = ({ available, title, date, description = '' }) => (
  <div>
    <h3>
      <span
        style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          borderRadius: '30px',
          backgroundColor: available ? 'green' : 'red',
        }}></span>{' '}
      {title}
    </h3>
    <p>{date}</p>
    {description && <p>{description}</p>}
  </div>
);

export default Item;
