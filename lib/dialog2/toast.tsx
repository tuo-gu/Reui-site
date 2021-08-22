import React from 'react';
import ReactDOM from 'react-dom';
import './toast.scss'

interface Props {
  visible:boolean
  text:string
  time?:number
}
const Toast:React.FunctionComponent<Props>=(props)=>{
  const elementMount=props.visible&&
    (
      <div className={"re-toast"}>
        {props.text}
      </div>
    )
  return ReactDOM.createPortal(elementMount,document.body)
}

const toast=(text:string,time?:number)=>{
  const component= (<Toast visible={true} text={text}/>)
  const close=()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const div=document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)

  setTimeout(()=>close(),time||2000)
}
export {toast}
export default Toast