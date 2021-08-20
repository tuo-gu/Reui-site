import React from 'react';
import Button from './button';
import './button.example.scss'

const ButtonExample: React.FunctionComponent = () => {
  return (
    //type快速定义按钮预设样式
<Button types="foundation | inform | danger  |warning" >基础按钮</Button>
  )}
export default ButtonExample;