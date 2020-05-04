import React from 'react';
import SearchBox from './Search/index.jsx';
import FixedTag from './FixedTag/index.jsx';
import {tags} from './mock.js';

const TopBox = ()=>{
  return (<>
    <SearchBox/>
    <FixedTag tags={tags}/>
  </>);
};

export default React.memo(TopBox);