import React from 'react';
import './button.scss'
import classes from '../helpers/classes';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  prefixClass?:string
  bgColor?:string
  radius?:true|string
}
const Button:React.FunctionComponent<Props>
  =(
    {className,
      prefixClass,
      color,
      bgColor,
      radius,
      ...restProps}
    )=>{
  console.log(radius);
  const radiusValue=radius===undefined?undefined:
    (radius===true?'20px':radius)
  return (
    <div>
      <button {...restProps}
        className={classes(prefixClass||'', className)}
        style={{color:color,
          backgroundColor:bgColor,
          borderRadius:radiusValue

        }}
        >
        {restProps.children}
      </button>
    </div>
  );
}

export default Button;