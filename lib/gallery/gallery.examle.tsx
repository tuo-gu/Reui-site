import React, {Fragment} from 'react';
import Gallery from './gallery';

export default function () {
  return(
    <Fragment>
      <div className="card" >
        <Gallery shift={190} viewWidth={220}  dots={3} prev={15} autoPlay/>
        <Gallery shift={190} viewWidth={220}  dots={3} prev={15} autoPlay loop/>
      </div>
      <div className="card" >
        <Gallery shift={190} viewWidth={190}  dots={3} autoPlay/>
        <Gallery shift={190} viewWidth={190}  dots={3} autoPlay loop/>
      </div>
    </Fragment>
  )
}

