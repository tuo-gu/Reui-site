import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  prefixClass?:string
}

const Icon: React.FunctionComponent<IconProps> =
  ({className,
     name,
    prefixClass,
     ...restProps}) => {

    return (
    <svg className={classes(prefixClass||'re-icon', className)===''?
      undefined:classes(prefixClass||'re-icon', className)}
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;