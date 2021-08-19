import React, {Fragment, ReactElement, ReactNode} from 'react';
import './dialog.scss'
import Icon from '../icon/icon';
import ReactDOM from 'react-dom';
import {scopedClassMaker} from '../helpers/classes';

interface Props {
  visible:boolean
  buttons?:Array<ReactElement>
  onClose:React.MouseEventHandler
  coverClick?:boolean
}

const rui=scopedClassMaker('rui-dialog')

const Dialog:React.FunctionComponent<Props>=(props)=>{
  const onClickClose:React.MouseEventHandler=(e)=>{
    props.onClose(e)
  }
  const onClickMask:React.MouseEventHandler=(e)=>{
    if(props.coverClick){
      props.onClose(e)
    }
  }
  const elementMount=props.visible &&
    <Fragment>
      <div className={rui('mask')} onClick={onClickMask} />
      <div className={rui('')}>
        <div className={rui('close')} onClick={onClickClose}>
          <Icon name="close" />
        </div>
        <header className={rui('header')}>消息框</header>
        <main className={rui('main')}>
          {props.children}
        </main>
        {props.buttons &&props.buttons.length>0 &&
        <footer className={rui('footer')}>
          {props.buttons&&props.buttons.map((button,index)=>
            React.cloneElement(button,{key:index}))}
        </footer>
        }
      </div>
    </Fragment>
  return ReactDOM.createPortal(elementMount,document.body)
}
Dialog.defaultProps={
  coverClick:false
}

const modal=(content:ReactNode,buttons?:Array<ReactElement>,afterClose?:()=>void)=>{
  const close=()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div);
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component= (
    <Dialog
      visible={true}
      onClose={()=>{close();afterClose&&afterClose()}}
      buttons={buttons}
    >{content}</Dialog>
  )
  const div=document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
  return close
}

//动态生成组件
const alert=(content:string)=>{
  modal(content, undefined,()=>{console.log('afterClose')})
}

const confirm=(content:string, yes?:()=>void, no?:()=>void)=>{
  const onYes=()=>{close();yes &&yes()}
  const onNo=()=>{close();no&&no()}
  const buttons=
    [<button onClick={()=>{onYes()}}>yes</button>,
    <button onClick={()=>{onNo()}}>no</button>]

  const close= modal(content,buttons,no)
}

export {alert,confirm,modal}
export default Dialog