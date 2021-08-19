import React from 'react';
import Button from './button';
import Tr from '../table/tr';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <div className={"card"}>
        <span>普通按钮</span>

        <Button color="blue" width="100px">按钮</Button>
      </div>

      <div className="card">
        <table className="propertyDescription">
          <thead>
            <Tr td='属性名,类型,默认值,说明'/>
          </thead>
          <tbody>
            <Tr td='color,String,default,按钮颜色'/>
            <Tr td='className,String|Object,reui-button,按钮类名'/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonExample;