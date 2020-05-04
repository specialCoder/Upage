import React from 'react';
import Layout from '../../components/Layout/index.jsx';
import Content from '../../components/Layout/Content.jsx';
import TopBox from '../TopBox/index.jsx';
import TodoList from '../TodoList/index.jsx';
import './style.less';

const Home  = ()=>{
  return <div style={{position:'relative'}}>
    <Layout/>
    <Content>
      <TopBox/>
      <TodoList/>
    </Content>
  </div>;
};

export default Home;