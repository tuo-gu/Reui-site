import React from 'react';
import Button from './button';
import Tr from '../table/tr';
import './button.example.scss'

const ButtonExample: React.FunctionComponent = () => {
  const test=()=>{console.log('fn');}
  return (
    <div>
      <div className={"card"}>
        <span>按钮类型</span>
        <div className="example-button">
          <Button color="white"
                  bgColor='green'
                  onClick={()=>{test()}}
                  types="mani"
          >基础按钮</Button>

          <Button types="foundation" className="test choose" prefixClass="re" >基础按钮</Button>
          <Button types="inform">信息按钮</Button>
          <Button types="danger">危险按钮</Button>
          <Button types="warning">警告按钮</Button>

          <Button color="white"
                  bgColor="blue"
          >信息按钮</Button>
          <Button>默认按钮</Button>
          <Button color="blue"
                  bgColor='green'
                  className="button button2"
                  prefixClass="re"
                  radius
                  onClick={()=>{test()}}
                  types="test"
          >圆角按钮</Button>
        </div>

      </div>

      <div className="card">
        <table className="propertyDescription">
          <thead>
            <Tr td='属性名,类型,默认值,说明'/>
          </thead>
          <tbody>
            <Tr td='color,String,default,按钮字体颜色'/>
            <Tr td='bgColor,String,undefined,按钮背景色'/>
            <Tr td='prefixClass,String,undefined,自定义按钮类名前缀，默认为空'/>
            <Tr td={`className,String|Object,undefined,自定义按钮类名;
            若使用prefixClass属性则是带前缀的类名，如前缀re，类名button为re-button否则为button`}/>
            <Tr td='radius,String,true,设置圆角，可以接受自定义string数值'/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonExample;