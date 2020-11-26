// vendor modules
import React, { useState, useRef, useEffect } from 'react';
// react modules
import Button from '@hawk-ui/button';

function Stopwatch() {
  const [count, setCount] = useState(0);

  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;

      setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="stopwatch">
      <div className="stopwatch-screen">
        {Math.round(count)}
        {/* {' - '}
        {watchState.seconds}
        {' - '}
        {watchState.milliSeconds} */}
      </div>
      {/* <div className="stopwatch-button">
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
      </div> */}
    </div>
  );
}

export default Stopwatch;
