import React from 'react';
import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
import './style.less';

const SearchBox = (props)=>{
  const {
    value,onChange
  } = props;
  return (<div className="list-search">
    {/* <div className="list-search-icon">
      <SearchIcon />
    </div> */}
    <InputBase
      value={value}
      onChange={onChange}
      placeholder="输入关键词搜索"
      inputProps={{ 'aria-label': 'search' }}
      classes={{
        root: 'list-search-inputRoot',
        input: 'list-search-input',
      }}
    />
  </div>);
};

export default React.memo(SearchBox);