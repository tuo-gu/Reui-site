import React from 'react';
import './button.scss'
import classes from '../helpers/classes';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  prefixClass?:string
  bgColor?:string
  radius?:true|string
  types?:string
  border?:string
}
const Button:React.FunctionComponent<Props>
  =(
    {className,
      prefixClass,
      color,
      bgColor,
      radius,
      types,
      border,
      ...restProps}
    )=>{

  const radiusValue=radius===undefined?undefined: (radius===true?'20px':radius)
  types=(types?types:'')
  className=(className?className:'')
  return (
      <button {...restProps}
        className={classes(prefixClass||'', className, types)===''?
                  undefined:classes(prefixClass||'', className, types)}
        style={{
            color:color,
            backgroundColor:bgColor,
            borderRadius:radiusValue,
            border:border
        }}
        >
        {restProps.children}
      </button>
  );
}

export default Button;