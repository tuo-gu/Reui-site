import React, {Fragment, useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';
import Tr from '../table/tr';
import Button from '../button/button';

export default function () {
  const [x,setX]=useState(false)
  const [y,setY]=useState(false)
  const openModal=()=>{
    const close=modal(<h1>你好
        <button onClick={()=>close()}>close</button>
      </h1>
    )
  }

  return(
    <Fragment>
      <div className={"card"}>
        <div >
          <h1>确认框</h1>
          <button onClick={()=>setX(!x)}>button1</button>
          <Dialog visible={x} buttons=
            {[
              <button onClick={()=>setX(false)}>确认</button>,
              <button onClick={()=>setX(false)}>取消</button>
            ]}
                  onClose={()=>{setX(false)}} >
            <div>content</div>
          </Dialog>
        </div>

        <div>
          <h1>确认框-可点击遮罩层</h1>
          <button onClick={()=>setY(!y)}>button2</button>
          <Dialog visible={y} buttons={[
            <button onClick={()=>setY(false)}>确认</button>,
            <button onClick={()=>setY(false)}>取消</button>
          ]}
                  onClose={()=>{setY(false)}}
                  coverClick={true}>
            <div>content</div>
          </Dialog>
        </div>

        <div>
          <h1>警告框</h1>
          <h6>内容展示，点击按钮执行定义的函数</h6>
          <button onClick={()=>alert('1')}>alert</button>
          <br/>
          <br/>
          <button onClick={()=>confirm('用户写入button',
            ()=>{console.log('yes')},
            ()=>{console.log('no')}
          )}>confirm</button>
        </div>

        <div>
          <h1>自定义消息框</h1>
          <button onClick={openModal}>modal</button>
        </div>

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
                        onClick={()=>setX(!x)}
                >警告框</Button>
              </td>
            </Tr>
            <Tr td={"confirm,确认框"}>
              <td>
                <Button types="simple"
                        onClick={()=>setY(!y)}
                >确认框</Button>
              </td>
            </Tr>
            <Tr td={"prompt,输入对话框"}>
              <td>
                <Button types="simple"
                        onClick={()=>{console.log('');}}
                >输入对话框</Button>
              </td>
            </Tr>
            <Tr td={"toast,自动消失提示框"}>
              <td>
                <Button types="simple"
                        onClick={()=>{console.log('');}}
                >自动消失提示框</Button>
              </td>
            </Tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}