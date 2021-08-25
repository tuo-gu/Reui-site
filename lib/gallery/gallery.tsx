import React, {useEffect, useRef, useState} from 'react';
import './gallery.scss'

interface Props {
  //width移动的距离
  width?:number
  viewWidth?:number
  loop?:boolean
}
const Gallery:React.FunctionComponent<Props>=(props)=>{
  const [active,setActive]=useState(1)
  const [saveActive,setSaveActive]=useState()
  const [len,setLent]=useState()
  // const [status,setStatus]=useState(true)
  const view=useRef<HTMLDivElement>(null)
  const container=useRef<HTMLUListElement>(null)
  const dotsUl=useRef<HTMLUListElement>(null)
  useEffect(()=>{
    init()
  },[])
  const init=()=>{
    setLent(container.current!.children.length)
  }
  useEffect(()=>{
    if(props.loop){
      setLoop()
    }else {
      setTransition()
    }
  },[active])
  const setLoop=()=>{
    console.log(active);
    // @ts-ignore
    const distance=(0-active)*props.width
    container.current!.style.transform=`translate(${distance}px,0)`;

    if(saveActive===1&&active===0){
      timer(len-2)
    }
    if(saveActive===len-2&&active===len-1){
      timer(1)
    }

  }
  const timer=(a:number)=>{
    setTimeout(()=>{
      container.current!.style.transitionProperty="none"
      setActive(a)
    },500)
    setTimeout(()=>{
      container.current!.style.transitionProperty="all"
    },600)
  }
  const setTransition=()=>{
    console.log('loopNo');
    if(Math.abs(saveActive-active)>1){
      container.current!.style.transitionProperty="none"
    }else {
      container.current!.style.transitionProperty="all"
    }
    // console.log(container);
    // @ts-ignore
    const distance=(0-active)*props.width
    container.current!.style.transform=`translate(${distance}px,0)`;

  }


  const handlePrev = () => {
    setSaveActive(active)
    setActive(active === 0 ? len-2 : active - 1)
  }

  const handleNext = () => {
    setSaveActive(active)
    setActive(active === len-1 ? 1 : active + 1);
  }

  return (
    <div className="re-slide-main" >
      <div className="re-container" ref={view}
           style={{width:props.viewWidth}}
            >
        <ul className="re-slide-group" ref={container} >
          <li className="re-slide-item">0</li>
          <li className="re-slide-item">1</li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">4</li>
        </ul>
      </div>

      <ul className="re-dots" ref={dotsUl}>
        <li/>
        <li/>
        <li/>
      </ul>

      <div className="slide-move-left" onClick={()=>handlePrev()}>《</div>
      <div className="slide-move-right" onClick={()=>handleNext()}>》</div>
    </div>
  )
}
export default Gallery;
