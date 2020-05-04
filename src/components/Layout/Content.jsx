import React from 'react';
import './style.less';

const Content = (props)=> {
  return (
    <React.Fragment>
      <div className="list-content">
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default React.memo(Content);