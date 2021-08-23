import {toast} from '../toast';
import Button from '../../button/button';
import React from 'react';

function f() {
  return(
    <Button types="simple"
            onClick={()=>toast("Hello,welcome!")}
    >自动消失提示框</Button>
  )
}
export default f;