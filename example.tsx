import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './example.scss';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Aside, Header, Content} from './lib/layout/layout';
import DialogExample from './lib/dialog/dialog.example';
import DialogExample2 from './lib/dialog2/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import IconDemo from './lib/icon/icon.demo';

const logo = require('./logo.png');
const firstIn=()=>{
  return location.hash === '#/' ||location.hash === '#/icon';
}
ReactDOM.render(
  <Router >
    <Layout className="site-page" >
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="94" height="48" alt=""/>
          <span> REUI </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li >
              <NavLink to="/icon" isActive={firstIn}>Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/dialog2">my对话框</NavLink>
            </li>
            <li>
              <NavLink to="/button">按钮</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/dialog2" component={DialogExample2}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));