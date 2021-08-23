import {prompt} from '../dialog';
import Button from '../../button/button';
import React from 'react';

function f() {
return(
  <Button types="simple"
          onClick={()=>{prompt(
            '在下方输入内容',
            '输入框',
          )
          }}
  >输入对话框</Button>
)
}
export default f;