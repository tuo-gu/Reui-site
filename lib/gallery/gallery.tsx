import React, {useEffect, useRef, useState} from 'react';
import './gallery.scss';

interface Props {
  //shift移动的距离
  shift?:number
  viewWidth?:number
  loop?:boolean
  dots:number
  autoPlay?:boolean
  prev?:number
}
const Gallery:React.FunctionComponent<Props>=(props)=>{
  const [active,setActive]=useState(1)
  const [saveActive,setSaveActive]=useState()
  const [len,setLent]=useState()
  const [timeInterval,setTimeInterval]=useState(0)
  const [isLoop,setIsLoop]=useState(false)
  const view=useRef<HTMLDivElement>(null)
  const container=useRef<HTMLUListElement>(null)
  const dotsUl=useRef<HTMLUListElement>(null)
  const main=useRef<HTMLDivElement>(null)
  useEffect(()=>{if (props.autoPlay){autoPlay()}},[timeInterval])
  useEffect(()=>{init();},[])
  const init=()=>{//页面初始化
    if(props.dots) {//生成dots
      for (let i = 0; i < props.dots;i++) {
        const li=document.createElement("li")
        li.setAttribute('name',`${i}`)
        dotsUl.current!.appendChild(li)
      }
    }
    //获取re-slide-group子元素个数
    setLent(container.current!.children.length)
    //事件委托，点击下标实现切换
    dotsUl.current!.addEventListener('click', function (e) {
      e.stopPropagation()
      if(e.target&&e.target.nodeName==="LI"){
        //value从0开始，需要加1
        setActive(parseInt(e.target.attributes.name.value)+1)
      }
    })
    //设置一个状态代表需求状态是循环，改变handle效果
    if(props.loop){setIsLoop(true)}
    console.log(len);
  }
  useEffect(()=>{
    if(props.loop){
      setLoop()
    }else {
      setTransition()
    }
    console.log(active)
    liSelected()
  },[active])
  const setLoop=()=>{
    // @ts-ignore
    const distance=props.prev?(0-active)*props.shift+props.prev: (0-active)*props.shift
    container.current!.style.transform=`translate(${distance}px,0)`;

    if(saveActive===1&&active===0){
      offTransition(len-2)
    }
    if(saveActive===len-2&&active===len-1){
      offTransition(1)
    }

  }
  const offTransition=(a:number)=>{
    setTimeout(()=>{
      container.current!.style.transitionProperty="none"
      setActive(a)
    },490)//稍小于css设置的动画过渡事件
    setTimeout(()=>{
      container.current!.style.transitionProperty="all"
    },800)

  }
  const setTransition=()=>{
    console.log('loopNo');
    if(Math.abs(saveActive-active)>1){
      container.current!.style.transitionProperty="none"
    }else {
      container.current!.style.transitionProperty="all"
    }
    // @ts-ignore
    const distance=props.prev?(0-active)*props.shift+props.prev: (0-active)*props.shift
    container.current!.style.transform=`translate(${distance}px,0)`;
  }

  const handlePrev = () => {
    setSaveActive(active)
    isLoop? setActive(active === 0 ? len-2 : active - 1):
    setActive(active === 1 ? len-2 : active - 1)
  }

  const handleNext = () => {
    setSaveActive(active)
    isLoop?setActive(active === len-1 ? 1 : active + 1):
    setActive(active === len-2 ? 1 : active + 1)
  }

  const autoPlay=(time=3000)=>{
    setTimeout(()=>{ timeInterval!==0&&handleNext();//消除第一次渲染马上出发
      setTimeout(()=>{setTimeInterval(timeInterval+1)},time)
    }, 0);
  }
  const liSelected=()=>{
    if(props.dots) {//生成dots
      for (let i = 0; i < props.dots;i++) {
          const li=document.createElement("li")
          active-1===i?li.setAttribute('class','selected'):null
          li.setAttribute('name',`${i}`)
          dotsUl.current!.childNodes[i].replaceWith(li)
      }
    }
  }

  return (
    <div className="re-slide-main" ref={main}>
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
      </ul>

      <div className="slide-move-left" onClick={()=>handlePrev()}>《</div>
      <div className="slide-move-right" onClick={()=>handleNext()}>》</div>
    </div>
  )
}
export default Gallery;
