import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc=scopedClassMaker('re-layout')
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const Header:React.FunctionComponent<Props>=(props)=>{
    const {className,...restProps}=props
    return (
      <div className={sc('header',{extra:className})} {...restProps}>
        {props.children}
      </div>
    )
};

export default Header;