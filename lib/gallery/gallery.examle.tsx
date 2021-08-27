import React, {Fragment} from 'react';
import Gallery from './gallery';

export default function () {
  return(
    <Fragment>
      <div className="card" >
      {/*  <Gallery shift={190} viewWidth={220}  dots={3} prev={15} autoPlay>*/}
      {/*    <li className="re-slide-item">0</li>*/}
      {/*    <li className="re-slide-item">1</li>*/}
      {/*    <li className="re-slide-item">2</li>*/}
      {/*    <li className="re-slide-item">3</li>*/}
      {/*    <li className="re-slide-item">4</li>*/}
      {/*  </Gallery>*/}
      {/*  <Gallery shift={190} viewWidth={220}  dots={3} prev={15} autoPlay loop>*/}
      {/*    <li className="re-slide-item">0</li>*/}
      {/*    <li className="re-slide-item">1</li>*/}
      {/*    <li className="re-slide-item">2</li>*/}
      {/*    <li className="re-slide-item">3</li>*/}
      {/*    <li className="re-slide-item">4</li>*/}
      {/*  </Gallery>*/}
      {/*</div>*/}
      {/*<div className="card" >*/}
      {/*  <Gallery shift={190} viewWidth={190}  dots={3} autoPlay loop>*/}
      {/*    <li className="re-slide-item">0</li>*/}
      {/*    <li className="re-slide-item">1</li>*/}
      {/*    <li className="re-slide-item">2</li>*/}
      {/*    <li className="re-slide-item">3</li>*/}
      {/*    <li className="re-slide-item">4</li>*/}
      {/*  </Gallery>*/}
        <Gallery shift={190} viewWidth={190}  dots={3} autoPlay loop>
          <li className="re-slide-item">0</li>
          <li className="re-slide-item">1</li>
          <li className="re-slide-item">2</li>
          <li className="re-slide-item">3</li>
          <li className="re-slide-item">4</li>
        </Gallery>
      </div>
    </Fragment>
  )
}

