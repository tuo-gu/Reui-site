import React from 'react';
import Layout from './layout';
import Footer from './footer';
import Content from './content';
import Header from './header';
import './layout.scss'
import Aside from './aside';
import './layout.example.scss'

export default function () {
    return (
      <div>
          <h1>第一个例子</h1>
          <Layout >
              <Header className="x">header</Header>
              <Content className="y">content</Content>
              <Footer className="x">footer</Footer>
          </Layout>

          <h1>第二个例子</h1>
            <Layout >
              <Header className="x">header</Header>
              <Layout>
                <Aside className="z">aside</Aside>
                <Content className="y">content</Content>
              </Layout>
              <Footer className="x">footer</Footer>
            </Layout>

          <h1>第三个例子</h1>
          <Layout >
            <Header className="x">header</Header>
            <Layout>
              <Content className="y">content</Content>
              <Aside className="z">aside</Aside>
            </Layout>
            <Footer className="x">footer</Footer>
          </Layout>

          <h1>第四个例子</h1>
          <Layout >
            <Layout>
              <Aside className="z">aside</Aside>
              <Layout>
                <Header className="x">header</Header>
                <Content className="y">content</Content>
                <Footer className="x">footer</Footer>
              </Layout>
            </Layout>
          </Layout>



          <h1>第五个例子</h1>
          <Layout >
              <Aside>aside</Aside>
              <Layout>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
              </Layout>
          </Layout>
      </div>
    )
}