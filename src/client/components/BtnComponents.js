// vendor moules
import React from 'react';
// react modules
import PropTypes from 'prop-types';
import Button from '@hawk-ui/button';

export default function BtnComponents(props) {
  const { status, start, stop, reset, resume } = props;

  return (
    <div className="btn-components">
      {status === 0 && (
        <Button
          onClick={() => { start(); }}
          className="btn-start"
        >
          Start
        </Button>
      )}
      {status === 1 && (
        <>
          <Button
            onClick={() => { stop(); }}
            className="btn-stop"
          >
            Stop
          </Button>
          <Button
            onClick={() => { reset(); }}
          >
            Reset
          </Button>
        </>
      )}
      {status === 2 && (
        <>
          <Button
            onClick={() => { resume(); }}
            className="btn-start"
          >
            Resume
          </Button>
          <Button
            onClick={() => { reset(); }}
          >
            Reset
          </Button>
        </>
      )}
    </div>
  );
}

BtnComponents.propTypes = {
  status: PropTypes.number,
  start: PropTypes.func,
  stop: PropTypes.func,
  reset: PropTypes.func,
  resume: PropTypes.func,
};
