import React, {Fragment, useState} from 'react';
import Dialog, {alert, confirm, prompt} from './dialog';
import Tr from '../table/tr';
import Button from '../button/button';
import {toast} from './toast';

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
          <Tr td='组件名,作用,示例' />
          </thead>
          <tbody>
            <Tr td={"alert,警告框"}>
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
                <Button types="simple"
                        onClick={()=>confirm('请点击“确认”/“取消”',
                        '提示')}
                >确认框</Button>
              </td>
            </Tr>
            <Tr td={"prompt,输入对话框"}>
              <td>
                <Button types="simple"
                        onClick={()=>{prompt(
                            '在下方输入内容',
                            '输入框',
                          )
                        }}
                >输入对话框</Button>
              </td>
            </Tr>
            <Tr td={"toast,自动消失提示框"}>
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
          <p>基础用法</p>
          <pre>
{`import Dialog from './dialog';
//data
const [x,setX]=useState(false)
`}
          </pre>
          <p>显示关闭按钮</p>
          <p>自定义header</p>
          <p>alert关闭按钮触发事件</p>

        </div>
      </div>
    </Fragment>
  )
}