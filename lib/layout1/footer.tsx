import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc=scopedClassMaker('re-layout')
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const Footer:React.FunctionComponent<Props>=(props)=>{
    const {className,...restProps}=props
    return (
      <div className={sc('footer',{extra:className})} {...restProps}>
        {props.children}
      </div>

    )
};

export default Footer;