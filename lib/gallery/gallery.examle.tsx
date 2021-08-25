import React from 'react';
import Gallery from './gallery';

export default function () {
  return(
    <div className="card" >
      <Gallery width={190} viewWidth={200} loop/>
    </div>
  )
}

