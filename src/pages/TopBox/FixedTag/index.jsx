import React from 'react';
import './style.less';

const FixedTag = (props)=>{
  const {tags=[]} = props;
  return (<div className="list-fixed-container">
    {tags.map(({name},i)=>{
      return <div key={i}>{name}</div>;
    })}
  </div>);
};

export default React.memo(FixedTag);