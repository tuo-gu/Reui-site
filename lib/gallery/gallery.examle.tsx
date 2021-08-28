import React, {Fragment} from 'react';
import Gallery from './gallery';
import Tr from '../table/tr';
import './gallery.examle.scss'

const img1 = require('../icons/swipe/1.jpg');
const img2 = require('../icons/swipe/2.jpg');
const img3 = require('../icons/swipe/3.jpg');
const img4 = require('../icons/swipe/4.jpg');
const img5 = require('../icons/swipe/5.jpg');
export default function () {
  return(
    <Fragment>
      <div className="card" >
        <div className="example-swipe">
          <Gallery viewWidth={800}  dots={5} autoPlay loop>
            <li className="example-swipe-item"><img src={img5} alt=""/></li>
            <li className="example-swipe-item"><img src={img1} alt=""/></li>
            <li className="example-swipe-item"><img src={img2} alt=""/></li>
            <li className="example-swipe-item"><img src={img3} alt=""/></li>
            <li className="example-swipe-item"><img src={img4} alt=""/></li>
            <li className="example-swipe-item"><img src={img5} alt=""/></li>
            <li className="example-swipe-item"><img src={img1} alt=""/></li>
          </Gallery>
        </div>
      </div>
      <div className="card" >
        <div className="site-code">
          <h4> 引入</h4>
          <pre>
{`import React, {Fragment} from 'react';
import Gallery from './gallery';`}
          </pre>
          <h4>说明</h4>
          <p>为实现无缝切换 需要在第一个子元素位置放最后一张图片，
            最后一个子元素位置放第一张图片。例：3张图片顺序应为3-1-2-3-1。</p>
          <h4>基础用法:</h4>
          <p>将需要轮播的内容放在
            <span className={"code"}>{`Gallery`}</span> 标签内。</p>
          <p><span className={"code"}>viewWidth</span>属性，设置组件的宽度，
            应与内容宽度等宽，超出部分会隐藏</p>
          <pre>
{`//tsx
\< Gallery  viewWidth={200}>
    <li className="item">3</li>
    <li className="item">1</li>
    <li className="item">2</li>
    <li className="item">3</li>
    <li className="item">1</li>
</Gallery>

//css
.item {
  width: 200px;
  height: 200px;
}
`}
          </pre>
          <Gallery viewWidth={200} >
            <li className="re-slide-item">3</li>
            <li className="re-slide-item">1</li>
            <li className="re-slide-item">2</li>
            <li className="re-slide-item">3</li>
            <li className="re-slide-item">1</li>
          </Gallery>
        </div>
      </div>
      <div className="card">
        <div className="site-code">
          <h4>轮播时间、指示标</h4>
          <p><span className={"code"}>time</span> 属性，设置轮播时间,默认值3000毫秒。</p>
          <p><span className={"code"}>dots</span> 属性，设置设置指示标个数。</p>
          <pre>
{`//tsx
\< Gallery time={5000} dots={2}>
...略
</Gallery>

`}
          </pre>
        </div>
      </div>
      <div className="card">
        <div className="site-code">
          <h4>无缝切换和自动轮播</h4>
          <p><span className={"code"}>loop</span> 属性，轮播效果实现无缝切换。</p>
          <p><span className={"code"}>autoPlay</span> 属性，实现自动轮播,默认时间3秒。</p>
          <pre>
{`//tsx
\< Gallery viewWidth={200} dots={2} loop autoPlay >
    <li >2</li>
    <li >1</li>
    <li >2</li>
    <li >1</li>
</Gallery>

`}
          </pre>
          <Gallery viewWidth={200}  dots={2} autoPlay loop >
            <li className="re-slide-item" style={{backgroundColor:"blue"}}>2</li>
            <li className="re-slide-item">1</li>
            <li className="re-slide-item">2</li>
            <li className="re-slide-item" style={{backgroundColor:"red"}}>1</li>
          </Gallery>

        </div>
      </div>

      <div className="card">
        <div className="site-code">
          <h4>前后层预览</h4>
          <p><span className={"code"}>prev</span> 属性，可以调整轮播视图内的元素与边距的距离。这时候搭配
            <span className={"code"}>viewWidth</span>属性调整可视区域宽度即可实现前后项的预览.</p>
          <p>例：子元素宽度200px，扩大可视区域<span className={"code"}>viewWidth</span>设为240px，前后预览的填充
            <span className={"code"}>prev</span>为（240-200）/2=20px。</p>
          <p>注意：为保证边界切换体验效果，使用<span className={"code"}>prev</span>时不应搭配
            <span className={"code"}>loop</span>属性使用</p>
          <pre>
{`//tsx
\< Gallery   autoPlay dots={3} viewWidth={240} prev={20}>
    <li className="item">3</li>
    <li className="item">1</li>
    <li className="item">2</li>
    <li className="item">3</li>
    <li className="item">1</li>
</Gallery>

//css
.item {
  width: 200px;
  height: 200px;
}
`}
          </pre>
          <Gallery viewWidth={240}  dots={3} autoPlay prev={20}>
            <li className="re-slide-item">3</li>
            <li className="re-slide-item">1</li>
            <li className="re-slide-item">2</li>
            <li className="re-slide-item">3</li>
            <li className="re-slide-item">1</li>
          </Gallery>
        </div>
      </div>
      <div className="card">
        <div className="site-code"><h4>属性参数</h4></div>
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,说明'/>
          </thead>
          <tbody>
          <Tr td='viewWidth,Number,null,可视区域宽度'/>
          <Tr td='loop,--,--,控制边界内容轮播效果是否为循环样式'/>
          <Tr td='autoPlay,--,--,设置自动轮播'/>
          <Tr td='dots,Number,null,设置底部指示器数量，默认不显示'/>
          <Tr td='pre,Number,null,设置内容偏移量'/>
          <Tr td='time,Number,3000ms,设置轮播时间'/>

          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

