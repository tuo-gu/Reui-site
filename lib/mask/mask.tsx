import React, {Fragment} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import ReactDOM from 'react-dom';
import './mask.scss'

const rui=scopedClassMaker('rui-dialog')
interface Props{
  onClose:React.MouseEventHandler
  visible:boolean
  coverClick?:boolean
  mount?:Element
}
const Mask:React.FunctionComponent<Props>=(props)=>{
  const onClickMask:React.MouseEventHandler=(e)=>{
    if(props.coverClick){
      props.onClose(e)
    }
  }
  const elementMount= props.visible&&
    <Fragment>
      <div className={rui('mask')} onClick={onClickMask} />
    </Fragment>
  return ReactDOM.createPortal(elementMount,props.mount||document.body)
}
Mask.defaultProps={
  coverClick:false
}
export default Mask;