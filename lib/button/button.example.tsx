import React from 'react';
import Button from './button';
import Tr from '../table/tr';
import './button.example.scss'
import Demo from '../../demo';

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <div className="card">
        <div className="example-button">
          <span>按钮类型</span>
          <Demo code={require('!!raw-loader!./buttonDemo1').default} />
        </div>
        <div className="example-button">
          <Button types="foundation" >基础按钮</Button>
          <Button types="inform">信息按钮</Button>
          <Button types="danger">危险按钮</Button>
          <Button types="warning">警告按钮</Button>

          <Button color="white"
                  bgColor="blue"
          >通知按钮</Button>
          <Button>默认按钮</Button>
        </div>

        <div className="example-button">
          <span>极简按钮</span>
          <Demo code={require('!!raw-loader!./buttonDemo2').default} />
        </div>
        <div className="example-button">
          <Button
            border={"1px solid dodgerblue"}
            bgColor={"white"}
            color={"dodgerblue"}
          >极简按钮</Button>
          <Button
            border={"1px solid #34a853"}
            bgColor={"white"}
            color={"#34a853"}
          >极简按钮</Button>
        </div>

        <div className="example-button">
          <span>圆角按钮</span>
          <Demo code={require('!!raw-loader!./buttonDemo3').default} />
        </div>
        <div className="example-button">
          <Button color="white"
                  bgColor='#34a853'
                  className="button button2"
                  prefixClass="re"
                  radius
                  types="test"
          >圆角按钮</Button>
          <Button radius>圆角按钮</Button>
          <Button
            border={"1px solid dodgerblue"}
            bgColor={"white"}
            color={"dodgerblue"}
            radius
          >圆角极简按钮</Button>
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
            <Tr td='types,String,null,快速定义按钮样式，可选值：foundation|inform|danger|warning'/>
            <Tr td='border,String,null,定义标签外边框'/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonExample;