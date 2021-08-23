import React from 'react';
import Icon from '../icon';

const IconDemo1: React.FunctionComponent = () => {
  return (
    <div className={"example-icon"}>
      <Icon name="alipay"/>
      <Icon name="wechat"/>
      <Icon name="qq"/>
      <Icon name="weibo"/>
    </div>
  );
};

export default IconDemo1;