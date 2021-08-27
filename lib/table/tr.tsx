import React from 'react';

interface Props {
  td:string
}
const Tr:React.FunctionComponent<Props>=(props)=>{
  const arr=props.td.split(',').map(a=>a.replace(/\s*/g,""))
  return (
  <tr>
    {arr.map((item,index)=>(<td key={index}>{item}</td>))}
    {props.children}
  </tr>
  )
}
export default Tr;