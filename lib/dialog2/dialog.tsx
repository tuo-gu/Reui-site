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
  closeIcon?:boolean
  header?:string
  inputText?:boolean
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
        {props.closeIcon&&
        <div className={rui('close')}
             onClick={onClickClose}>
              <Icon name="close" />
        </div>}
        {props.header&&
        <header className={rui('header')}>{props.header}</header>}
        <label>
        <main className={rui('main')}>
          {props.children}
          {console.log(props.inputText)}
          {props.inputText &&<div className="div-input">
            <input type={"text"} name="promptInput" placeholder={"请输入内容："}/>
          </div>}
        </main>
        </label>
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
  coverClick:false,
  closeIcon:false
}

const modal=(content:ReactNode,
             header?:string,
             buttons?:Array<ReactElement>,
             afterClose?:()=>void,
             closeIcon?:boolean,
             inputText?:boolean
            )=>{
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
      closeIcon={closeIcon}
      header={header}
      inputText={inputText}

    >{content}</Dialog>
  )
  const div=document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
  return close
}

//动态生成组件
const alert=(content:string,header:string,fn?:()=>void)=>{
      modal(content,
            header,
            undefined,
            fn,
            true,
            )
}

const confirm=(content:string,header?:string, yes?:()=>void, no?:()=>void)=>{
  const onYes=()=>{close();yes &&yes()}
  const onNo=()=>{close();no&&no()}
  const buttons=
    [<button onClick={()=>{onYes()}}>确认</button>,
    <button onClick={()=>{onNo()}}>取消</button>]

  const close= modal(content,header,buttons,no)
}

const prompt=(content:string,header?:string,yes?:()=>void, no?:()=>void)=>{
  const onYes=()=>{close();yes &&yes()}
  const onNo=()=>{close();no&&no()}
  const inputText=true
  const buttons=
    [<button onClick={()=>{onYes()}}>确认</button>,
      <button onClick={()=>{onNo()}}>取消</button>]
  const close= modal(
    content,
    header,
    buttons,
    undefined,
    undefined,
    inputText)
}

export {alert,confirm,modal,prompt}
export default Dialog