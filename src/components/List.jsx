import React from 'react';
import Item from './Item';

const List = ({ list }) => (
  <div>
    {list.map((item, index) => (
      <Item
        key={`item${index}`}
        {...item}
        // title={data[3].title}
        // available={data[3].available}
        // date={data[3].date}
        // description={data[3].description}
      />
    ))}
  </div>
);

export default List;
