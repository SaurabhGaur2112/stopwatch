// vendor modules
import React, { useState, useRef } from 'react';
// react modules
import Button from '@hawk-ui/button';

function Stopwatch() {
  const [watchState, setWatchState] = useState({
    running: false,
    times: [0, 0, 0],
    time: performance.now(),
    isStarted: false,
  });

  const requestRef = useRef();

  const pad0 = (value, count) => {
    let result = value.toString();
    for (; result.length < count; --count) {
      result = `0${result}`;
    }
    return result;
  };

  const formatter = (times) => {
    return `${pad0(times[0], 2)}:${pad0(times[1], 2)}:${pad0(Math.floor(times[2]), 2)}`;
  };

  const step = (timestamp) => {
    if (!watchState.running) {
      return;
    }
    console.log('query timestamp', timestamp);
  };

  const startTime = () => {
    if (!watchState.running) {
      setWatchState({
        running: true,
      });
      requestAnimationFrame(step(this));
    }
    console.log('query time', watchState.time);
    // if (!watchState.isStarted) {
    //   return;
    // }
    // setWatchState({
    //   timePassed: 0,
    //   milliSeconds: '00',
    //   seconds: '00',
    //   minutes: '00',
    //   isStarted: true,
    // });
  };

  const stopTime = () => {
    window.clearInterval(interval);
    setWatchState({
      isStarted: false,
    });
  };

  console.log('query times', formatter(watchState.times));
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
