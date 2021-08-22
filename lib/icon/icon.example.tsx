import IconDemo1 from './icon.demo1';
import React from 'react';
import Demo from '../../demo';
import '../../example.scss'
import './icon.example.scss'
import IconDemo2 from './icon.demo2';

const IconExample = () => {
  return (
   <div className="card">
     <p>默认提供了开发常用的svg图标，如下：</p>
     <Demo code={require('!!raw-loader!./icon.demo1.tsx').default}>
       <span>(1)用法示例</span>
       <IconDemo1/>
     </Demo>

     <Demo code={require('!!raw-loader!./icon.demo2.tsx').default}>
       <span>(2)自定义颜色</span>
       <IconDemo2/>
     </Demo>
     <div className="site-code">
       <p>使用时，只需要在节点内用即可
         （name为图标名称，例如：wechat、qq等），如下代码即可显示一个微信图标：</p>
       <code>
         {`\< Icon name="wechat"/>`}
       </code>
     </div>
   </div>
  );
};

export default IconExample;
