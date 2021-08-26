import React, {Fragment} from 'react';
import Gallery from './gallery';

export default function () {
  return(
    <Fragment>
      <div className="card" >
        <Gallery shift={190} viewWidth={220}  dots={3} prev={15}/>
      </div>
      <div className="card" >
        <Gallery shift={190} viewWidth={200} loop dots={3} />
      </div>
    </Fragment>
  )
}

