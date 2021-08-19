import React, {Fragment, useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';


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
      <div>
        <h1>example1</h1>
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
        <h1>example2</h1>
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
        <h1>example3</h1>
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
        <h1>example4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </Fragment>
  )
}