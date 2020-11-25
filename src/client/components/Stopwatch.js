// vendor modules
import React, { useState } from 'react';
// react modules
import Button from '@hawk-ui/button';

function Stopwatch() {
  const [watchState, setWatchState] = useState({
    timePassed: 0,
    milliSeconds: '00',
    seconds: '00',
    minutes: '00',
    isStarted: false,
  });

  return (
    <div className="stopwatch">
      <div className="stopwatch-screen">
        {watchState.minutes}
        {' - '}
        {watchState.seconds}
        {' - '}
        {watchState.milliSeconds}
      </div>
      <div className="stopwatch-button">
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
}

export default Stopwatch;
