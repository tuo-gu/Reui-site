import React, {Fragment} from 'react';
import Tr from '../table/tr';

export default function () {

  return(
    <Fragment>
      <div className="card">
        <div className="site-code">
          <h4>遮罩层</h4>
          <p>在弹出信息、优先选择层等界面，经常会用到蒙版遮罩；使用
            遮罩蒙版用户点击蒙版不会触发蒙版下方的逻辑，
            而会关闭弹出窗口的同时关闭蒙版；再比如像移动端侧滑菜单界面，菜单划出后，除侧滑菜单之外的
            其它区域都会遮罩一层蒙版，用户点击蒙版会关闭侧滑菜单同时关闭蒙版。
            </p>
          <p>遮罩蒙版常用的操作包括：创建、显示、关闭，如下代码：</p>
          <pre>
<p className={'note'}>//引入</p>
{`import React, {useState} from 'react';
import Mask from './mask';`}
<p className={'note'}>//使用useState维护data，true显示，false关闭</p>
{`const [visible,setVisible]=useState(false) `}
<p className={'note'}>//onClose为用户点击蒙版时自动执行的回调；</p>
{`< Mask visible={visible} coverClick={true} onClose={()=>{setVisible(!visible)}}/>`}
<p className={'note'}>//触发显示</p>
{`< button onClick={()=>{setVisible(true)}}>按钮</button>`}
          </pre>
          <p>注意：关闭遮罩仅会关闭，不会销毁；关闭之后可以再次调用
            <span className={'code'}>setVisible(true)}</span>打开遮罩。</p>
          <p>不同的遮罩层应该使用不同的useState进行维护,避免互相干扰。</p>
          <p>
            reui默认的蒙版遮罩使用rui-dialog-mask类定义（如下代码），若需自定义遮罩效果，只需覆盖定义.rui-dialog-mask即可；
          </p>
          <pre>
{`.rui-dialog-mask{
    position: fixed;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    background:fade_out(black,0.5);
    z-index: 998;
}
`}
          </pre>
        </div>
      </div>
      <div className="card">
        <div className="site-code"><h4>属性参数</h4></div>
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,说明'/>
          </thead>
          <tbody>
          <Tr td='visible,Boolean,false,设置遮罩层是否显示，true时显示'/>
          <Tr td='onClose,Function,--,用户点击时的回调函数，一般用来维护useState控制遮罩层关闭'/>
          <Tr td='coverClick,Boolean,false,为true时点击遮罩层可关闭，false则点击遮罩层不会关闭'/>
          <Tr td='mount,Element,document.body,遮罩层的挂载节点'/>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}