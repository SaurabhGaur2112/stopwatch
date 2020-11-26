// vendor modules
import React, { useState } from 'react';
// react modules
import Button from '@hawk-ui/button';

let interval;
function Stopwatch() {
  const [watchState, setWatchState] = useState({
    timePassed: 0,
    milliSeconds: '00',
    seconds: '00',
    minutes: '00',
    isStarted: false,
  });

  const formatter = (input) => {
    const time = input.toString();

    return time.length < 2 ? `0${time}` : time.slice(-2);
  };

  const formatTime = () => {
    setWatchState({
      // ...watchState,
      milliSeconds: formatter(watchState.timePassed),
      seconds: formatter(Math.floor((watchState.timePassed / 100) % 60)),
      minutes: formatter(Math.floor((watchState.timePassed / (100 * 60)) % 60)),
    });
    console.log('query watchState', watchState);
    console.log('query formatter', formatter(watchState.timePassed));
  };

  const timeNow = () => {
    const seconds = parseInt(watchState.timePassed, 10) + 1;
    console.log('query timeNow', seconds);
    setWatchState({
      // ...watchState,
      timePassed: seconds,
    });
    formatTime();
  };

  const startTime = () => {
    if (watchState.isStarted) {
      return;
    }
    setWatchState({
      timePassed: 0,
      milliSeconds: '00',
      seconds: '00',
      minutes: '00',
      isStarted: true,
    });
    interval = setInterval(timeNow(), 10);
  };

  const stopTime = () => {
    window.clearInterval(interval);
    setWatchState({
      isStarted: false,
    });
  };

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
        <Button
          onClick={() => { startTime(); }}
        >
          Start
        </Button>
        <Button
          onClick={() => { stopTime(); }}
        >
          Stop
        </Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
}

export default Stopwatch;
