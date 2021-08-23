import React, {Fragment, useState} from 'react';
import Dialog, {alert, confirm, prompt} from './dialog';
import Tr from '../table/tr';
import Button from '../button/button';
import {toast} from './toast';
import Demo from '../../demo';

export default function () {
  const [x,setX]=useState(false)
  const [y,setY]=useState(false)
  return(
    <Fragment>
      <div className={"card"}>
        <Dialog visible={x} onClose={()=>{setX(false)}}/>
        <Dialog visible={y} onClose={()=>{setY(false)}}/>
        {/*<div >*/}
        {/*  <h1>确认框</h1>*/}
        {/*  <button onClick={()=>setX(!x)}>button1</button>*/}
        {/*  <Dialog visible={x} buttons=*/}
        {/*    {[*/}
        {/*      <button onClick={()=>setX(false)}>确认</button>,*/}
        {/*      <button onClick={()=>setX(false)}>取消</button>*/}
        {/*    ]}*/}
        {/*          onClose={()=>{setX(false)}} >*/}
        {/*    <div>content</div>*/}
        {/*  </Dialog>*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <h1>确认框-可点击遮罩层</h1>*/}
        {/*  <button onClick={()=>setY(!y)}>button2</button>*/}
        {/*  <Dialog visible={y} buttons={[*/}
        {/*    <button onClick={()=>setY(false)}>确认</button>,*/}
        {/*    <button onClick={()=>setY(false)}>取消</button>*/}
        {/*  ]}*/}
        {/*          onClose={()=>{setY(false)}}*/}
        {/*          coverClick={true}>*/}
        {/*    <div>content</div>*/}
        {/*  </Dialog>*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <h1>警告框</h1>*/}
        {/*  <h6>内容展示，点击按钮执行定义的函数</h6>*/}
        {/*  <button onClick={()=>alert('1',"警告框",()=>{console.log('警告框输出')})}>alert</button>*/}
        {/*  <br/>*/}
        {/*  <br/>*/}
        {/*  <button onClick={()=>confirm('用户写入button',*/}
        {/*    '自定义',*/}
        {/*    ()=>{console.log('yes')},*/}
        {/*    ()=>{console.log('no')}*/}
        {/*  )}>confirm</button>*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <h1>自定义消息框</h1>*/}
        {/*  <button onClick={openModal}>modal</button>*/}
        {/*</div>*/}

      </div>

      <div className="card">
        <table className={"propertyDescription"}>
          <thead>
          <Tr td='组件名,作用,代码,示例' />
          </thead>
          <tbody>
            <Tr td={"alert,警告框"}>
              <td>
                <Demo code={require('!!raw-loader!./demoExample/alert').default}/>

              </td>
              <td>
                <Button types="simple"
                        onClick={()=>alert(
                          '你好，这是个警告信息！',
                           '警告框'
                          )}
                >警告框</Button>
              </td>
            </Tr>
            <Tr td={"confirm,确认框"}>
              <td>
                <Demo code={require('!!raw-loader!./demoExample/confirm').default}/>
              </td>
              <td>
                <Button types="simple"
                        onClick={()=>confirm('请点击“确认”/“取消”',
                        '提示')}
                >确认框</Button>
              </td>
            </Tr>
            <Tr td={"prompt,输入对话框"}>
              <td>
                <Demo code={require('!!raw-loader!./demoExample/prompt').default}/>
              </td>
              <td>
                <Button types="simple"
                        onClick={()=>{prompt(
                            '在下方输入内容',
                            '输入框',
                          (a?:string)=>{a&&toast(a)}
                          )
                        }}
                >输入对话框</Button>
              </td>
            </Tr>
            <Tr td={"toast,自动消失提示框"}>
              <td>
                <Demo code={require('!!raw-loader!./demoExample/toast').default}/>
              </td>
              <td>
                <Button types="simple"
                        onClick={()=>toast("Hello,welcome!")}
                >自动消失提示框</Button>
              </td>
            </Tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="site-code">
          <h4>(alert示例:) 引入</h4>
          <pre>
{`import {alert} from '../dialog';`}
          </pre>
          <h4>基础用法:</h4>
          <p><span className={"code"}>alert()</span> 搭配button使用</p>
          <pre>
{`\<button onClick={()=>alert('你好，这是个警告信息！','警告框')}>警告框\</button>`}
          </pre>
        </div>
      </div>

      <div className="card">
        <div className="site-code">
          <p><span className={"code"}>alert</span>
            接受的参数,按照参数接受顺序排列
          </p>
        </div>
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,可选性,说明'/>
          </thead>
          <tbody>
          <Tr td='content,String,--,必填,提示框内容'/>
          <Tr td='header,String,undefined,,提示框标题'/>
          <Tr td='fn,Function,undefined,,关闭提示框触发函数'/>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="site-code">
          <h4>(alert示例:) 引入</h4>
          <pre>
{`import {confirm} from '../dialog';`}
          </pre>
          <h4>基础用法:</h4>
          <p><span className={"code"}>confirm()</span> 搭配button使用</p>
          <pre>
{`\<button onClick={()=>confirm('你好，这是个警告信息！','警告框',
()=>{console.log('yes')},()=>{console.log('no')})}>警告框\</button>`}
          </pre>
        </div>
      </div>

      <div className="card">
        <div className="site-code">
          <p><span className={"code"}>confirm</span>
            接受的参数,按照参数接受顺序排列
          </p>
        </div>
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,可选性,说明'/>
          </thead>
          <tbody>
          <Tr td='content,String,--,必填,提示框内容'/>
          <Tr td='header,String,undefined,,提示框标题'/>
          <Tr td='yes,Function,undefined,,点击确认按钮触发函数'/>
          <Tr td='no,Function,undefined,,点击取消按钮触发函数'/>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="site-code">
          <p><span className={"code"}>prompt</span>与
            <span className={"code"}>confirm</span>类似，
            接受的参数,按照参数接受顺序排列
          </p>
          <p><span className="code">prompt</span> 第三个参数yes函数，其第一个参数(下例命名为a)返回的是提示框里面的input的value</p>
          <pre>
{`< Button types="simple"
  onClick={()=>prompt('在下方输入内容','输入框',(a?:string)=>{a&&console.log(a))}
>输入对话框 /< /Button>`}

          </pre>
        </div>
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,可选性,说明'/>
          </thead>
          <tbody>
          <Tr td='content,String,--,必填,提示框内容'/>
          <Tr td='header,String,undefined,,提示框标题'/>
          <Tr td='yes,Function,undefined,,点击确认按钮触发函数'/>
          <Tr td='no,Function,undefined,,点击取消按钮触发函数'/>
          </tbody>
        </table>
      </div>

      <div className="card">
        <div className="site-code">
          <p><span className={"code"}>alert、confirm、prompt、toast</span>
            继承自<span className={"blue"}>modal插件,modal插件</span>接受以下属性
          </p>
        </div>
        <table className="propertyDescription">
          <thead>
          <Tr td='属性名,类型,默认值,说明'/>
          </thead>
          <tbody>
          <Tr td='content,ReactNode,（必填）,提示框内容'/>
          <Tr td='header,String,undefined,提示框标题'/>
          <Tr td='buttons,Array<ReactElement>,undefined,接受ReactElement元素，如<button>，设置提示框按钮'/>
          <Tr td='closeIcon,Boolean,false,true值设置右上角显示关闭窗口按钮'/>
          <Tr td='inputText,Boolean,false,设置提示框内部input输入框'/>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}