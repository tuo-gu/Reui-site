import React, {Fragment} from 'react';
import Gallery from './gallery';
import Tr from '../table/tr';
import './gallery.examle.scss'

export default function () {
  return(
    <Fragment>
      <div className="card" >
        <Gallery viewWidth={220}  dots={3} prev={10} autoPlay loop >
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">1</li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">1</li>
        </Gallery>
        <Gallery viewWidth={220}  dots={3} prev={10} autoPlay >
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">1</li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">1</li>
        </Gallery>
      </div>
      <div className="card" >
        <div className="site-code">
          <h4> 引入</h4>
          <pre>
{`import React, {Fragment} from 'react';
import Gallery from './gallery';`}
          </pre>
          <h4>基础用法:</h4>
          <p>将需要轮播的内容放在
            <span className={"code"}>{`Gallery`}</span> 标签内。</p>
          <p><span className={"code"}>viewWidth</span>属性，设置组件的宽度，
            应与内容宽度等宽，超出部分会隐藏</p>
          <pre>
{`//tsx
\< Gallery  viewWidth={200}>
    <li className="item">0</li>
    <li className="item">1</li>
    <li className="item">2</li>
    <li className="item">3</li>
    <li className="item">4</li>
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
          <h4>无缝切换和自动轮播</h4>
          <p><span className={"code"}>loop</span> 属性，轮播效果实现无缝切换。注意！如要实现无缝切换
          需要在第一个子元素位置放最后一张图片，最后一个子元素位置放第一张图片。例：3张图片顺序应为3-1-2-3-1</p>
          <p><span className={"code"}>autoPlay</span> 属性，实现自动轮播</p>
          <pre>
{`//tsx
\< Gallery viewWidth={200} loop autoPlay >
...略
</Gallery>

`}
          </pre>
          <Gallery viewWidth={200}  dots={2} autoPlay loop >
            <li className="re-slide-item" style={{backgroundColor:"blue"}}>2</li>
            <li className="re-slide-item">1</li>
            <li className="re-slide-item">2</li>
            <li className="re-slide-item" style={{backgroundColor:"red"}}>1</li>
          </Gallery>
          <p><span className={"code"}>time</span> 属性，设置轮播时间,默认值3000毫秒</p>
          <pre>
{`//tsx
\< Gallery viewWidth={200} loop autoPlay time={5000}>
...略
</Gallery>

`}
          </pre>
        </div>
      </div>
      <div className="card">
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,说明'/>
          </thead>
          <tbody>
          <Tr td='shift,Number,--,Gallery标签子元素宽度'/>
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

