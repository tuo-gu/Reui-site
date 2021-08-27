import React, {Fragment} from 'react';
import Gallery from './gallery';
import Tr from '../table/tr';

export default function () {
  return(
    <Fragment>
      <div className="card" >
        <Gallery shift={190} viewWidth={220}  dots={3} prev={15} autoPlay>
          <li className="re-slide-item">0</li>
          <li className="re-slide-item"><a href="http://www.baidu.com" target="_blank">1</a></li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">4</li>
        </Gallery>
        <Gallery shift={190} viewWidth={220}  dots={3} prev={15} autoPlay loop>
          <li className="re-slide-item">0</li>
          <li className="re-slide-item">1</li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">4</li>
        </Gallery>
      </div>
      <div className="card" >
        <Gallery shift={190} viewWidth={190}  dots={3} autoPlay loop>
          <li className="re-slide-item">0</li>
          <li className="re-slide-item">1</li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">4</li>
        </Gallery>
        <Gallery shift={190} viewWidth={190}  dots={3} autoPlay loop>
          <li className="re-slide-item">0</li>
          <li className="re-slide-item">1</li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">4</li>
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
          <p><span className={"code"}>alert()</span> 搭配button使用</p>
          <pre>
{`\<button onClick={()=>alert('你好，这是个警告信息！','警告框')}>警告框\</button>`}
          </pre>
        </div>
      </div>
      <div className="card">
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,说明'/>
          </thead>
          <tbody>
          <Tr td='color,String,default,按钮字体颜色'/>
          <Tr td='bgColor,String,undefined,按钮背景色'/>
          <Tr td='prefixClass,String,undefined,自定义按钮类名前缀，默认为空'/>
          <Tr td={`className,String|Object,undefined,自定义按钮类名;
            若使用prefixClass属性则是带前缀的类名，如前缀re，类名button为re-button否则为button`}/>
          <Tr td='radius,String,true,设置圆角，可以接受自定义string数值'/>
          <Tr td='types,String,null,快速定义按钮样式，可选值：foundation|inform|danger|warning'/>
          <Tr td='border,String,null,定义标签外边框'/>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

