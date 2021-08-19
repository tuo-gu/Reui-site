import React from 'react';

interface Props {
  td:string
}
const Tr:React.FunctionComponent<Props>=(props)=>{
  const arr=props.td.split(',').map(a=>a.replace(/\s*/g,""))
  return (
  <tr>
    {arr.map(item=>(<td key={item}>{item}</td>))}
  </tr>
  )
}
export default Tr;