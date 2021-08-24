import React from 'react';
import './gallery.scss'


const Gallery:React.FunctionComponent=()=>{
  return (
    <div className="re-slide-main">
      <div className="re-slide-group">
        <div className="re-slide-item">1</div>
        <div className="re-slide-item">2</div>
        <div className="re-slide-item">3</div>
      </div>

      <ul className="re-dots">
        <li />
        <li/>
        <li/>
      </ul>

      <div className="slide-move-left">《</div>
      <div className="slide-move-right">》</div>
    </div>
  )

}
const slide=()=>{
  // const group=document.querySelector('.re-slide-group')
  // ReactDOM.render('group',document.querySelector('#slide'))
}
export {slide}
// const div=document.createElement('div')
// // @ts-ignore
// document.querySelector('#slide').append(div)
// return  ReactDOM.render(component,div)
// // return ReactDOM.createPortal(div,document.querySelector('#slide'))




// const item=document.querySelectorAll('.re-slide-item')

// const dots=document.querySelector('.re-dots')
//
// const li=dots.querySelectorAll('li')
// const moveLeft=document.querySelectorAll('.slide-move-left')
// const moveRight=document.querySelectorAll('.slide-move-right')
// let index=0
// let timer=null

// group.style.width=item.length+'px'
// group.style.left=0+'px'

export default  Gallery;