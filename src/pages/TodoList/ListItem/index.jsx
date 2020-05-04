import React from 'react';
import './style.less';

const ListItem = (props)=>{
  const {
    name,desc,index
  } = props;
  return <div className="listItem">
    <div className="listItem-img">{index}</div>
    <div className="listItem-content">
      <p className="listItem-content-title">{name}</p>
      <p className="listItem-content-desc">{desc}</p>
    </div>
  </div>;
};

export default React.memo(ListItem);