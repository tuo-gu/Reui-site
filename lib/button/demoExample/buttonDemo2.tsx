import React from 'react';
import Button from '../button';
import '../button.example.scss'

const ButtonExample: React.FunctionComponent = () => {
  return (
    <Button
      border={"1px solid dodgerblue"}
      bgColor={"white"}
      color={"dodgerblue"}
    >极简按钮</Button>
  )}
export default ButtonExample;