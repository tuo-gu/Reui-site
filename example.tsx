import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './example.scss';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Aside, Header, Content} from './lib/layout/layout';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import IconExample from './lib/icon/icon.example';
import LayoutExample from './lib/layout/layout.example';
import GalleryExample from './lib/gallery/gallery.examle';


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
              <NavLink to="/icon" isActive={firstIn}>Icon图标</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog对话框</NavLink>
            </li>
            <li>
              <NavLink to="/button">按钮</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">轮播图</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/gallery" component={GalleryExample}/>
        </Content>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));