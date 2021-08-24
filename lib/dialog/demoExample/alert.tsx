import {alert} from '../dialog';
import Button from '../../button/button';
import React from 'react';

function f() {
  return (
    <Button types="simple"
      onClick={()=>alert('你好，这是个警告信息！','警告框')}
  >警告框</Button>)
}
export default f;