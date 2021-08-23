import {confirm} from '../dialog';
import Button from '../../button/button';
import React from 'react';

function f(){
  return(
    <Button types="simple"
            onClick={()=>confirm('请点击“确认”/“取消”',
              '提示')}
    >确认框</Button>
  )
}
export default f;