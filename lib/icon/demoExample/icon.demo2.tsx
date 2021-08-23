import React from 'react';
import Icon from '../icon';

const IconDemo2: React.FunctionComponent = () => {
  return (
    <div className={"example-icon"} >
      <Icon name="alipay" color="blue" />
      <Icon name="wechat" color="green"/>
      <Icon name="qq" color="cornflowerblue"/>
      <Icon name="weibo" color="red"/>
    </div>
  );
};

export default IconDemo2;