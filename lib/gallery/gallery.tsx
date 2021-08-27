import React, {useEffect, useRef, useState} from 'react';
import './gallery.scss';

interface Props {
  //shift移动的距离
  shift:number
  viewWidth?:number
  loop?:boolean
  dots?:number
  autoPlay?:boolean
  prev?:number
  time?:number
}
const Gallery:React.FunctionComponent<Props>=(props)=>{
  const [active,setActive]=useState(1)
  const [saveActive,setSaveActive]=useState()
  const [len,setLent]=useState()
  const [timeInterval,setTimeInterval]=useState(0)
  const [isLoop,setIsLoop]=useState(false)
  const [autoPlayState,setAutoPlayState]=useState(true)
  const [go,setGo]=useState(true)
  const [itemWidth,setItemWidth]=useState()

  const slideView=useRef<HTMLDivElement>(null)
  const slideContainer=useRef<HTMLUListElement>(null)
  const dotsUl=useRef<HTMLUListElement>(null)
  const slideMain=useRef<HTMLDivElement>(null)
  useEffect(()=>{if (props.autoPlay){autoPlayState&& autoPlay(props.time)}},[timeInterval])
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
    setLent(slideContainer.current!.children.length)
    //获取item子元素宽度
    setItemWidth(slideContainer.current!.children[0].clientWidth);
    //事件委托，点击下标实现切换
    dotsUl.current!.addEventListener('click', function (e) {
      e.stopPropagation()
      if(e.target&&e.target.nodeName==="LI"){
        //value从0开始，需要加1
        setActive(parseInt(e.target.attributes.name.value)+1)
      }
    })
    //设置一个状态代表需求状态是循环，改变handle切换效果
    if(props.loop){setIsLoop(true)}

    //监听鼠标移入停止播放 /绑定监听鼠标移出继续播放
    slideMain.current!.addEventListener('mouseenter',(e:MouseEvent)=> {
      if(e.target&&e.target.nodeName==='DIV'){
        setAutoPlayState(false)
        slideMain.current!.addEventListener('mouseleave',function () {
          setAutoPlayState(true)
          setTimeInterval(timeInterval+1)
        })
      }
    })
  }

  useEffect(()=>{
    if(props.loop){
      setLoop()
    }else {
      setTransition()
    }
    liSelected()
  },[active])
  const setLoop=()=>{
    // @ts-ignore
    // const distance=props.prev?(0-active)*props.shift+props.prev: (0-active)*props.shift
    const distance=props.prev?(0-active)*itemWidth+props.prev: (0-active)*itemWidth
    slideContainer.current!.style.transform=`translate(${distance}px,0)`;

    if(saveActive===1&&active===0){
      offTransition(len-2)
    }
    if(saveActive===len-2&&active===len-1){
      offTransition(1)
    }

  }
  const offTransition=(a:number)=>{
    setTimeout(()=>{
      slideContainer.current!.style.transitionProperty="none"
      setActive(a)
    },490)//稍小于css设置的动画过渡事件
    setTimeout(()=>{
      slideContainer.current!.style.transitionProperty="all"
    },800)

  }
  const setTransition=()=>{
    if(Math.abs(saveActive-active)>1){
      slideContainer.current!.style.transitionProperty="none"
    }else {
      slideContainer.current!.style.transitionProperty="all"
    }
    // @ts-ignore
    // const distance=props.prev?(0-active)*props.shift+props.prev: (0-active)*props.shift
    const distance=props.prev?(0-active)*itemWidth+props.prev: (0-active)*itemWidth
    slideContainer.current!.style.transform=`translate(${distance}px,0)`;
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
    if(go){//节流
      setGo(false)
      timeInterval!==0&&handleNext();//消除第一次渲染马上切换
      setTimeout(
        ()=>{
          setGo(true)
          setTimeInterval(timeInterval+1);
        },time)
    }

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
    <div className="re-slide-main" ref={slideMain}>
      <div className="re-container" ref={slideView}
           style={{width:props.viewWidth}}>
        <ul className="re-slide-group" ref={slideContainer} >
          {props.children}
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
