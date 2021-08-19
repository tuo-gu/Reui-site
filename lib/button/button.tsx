import React from 'react';
import './button.scss'
import classes from '../helpers/classes';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  width?:string
}
const Button:React.FunctionComponent<Props>
  =(
    {className,
      color,
      width,
      ...restProps}
    )=>{
  return (
    <div>
      <button {...restProps}
        className={classes('reui-button', className)}
        style={{color:color,
                width:width}}
        >
        {restProps.children}
      </button>
    </div>
  );
}

export default Button;