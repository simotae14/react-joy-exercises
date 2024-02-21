import React from 'react';

import Clock from './Clock'

function App() {
  const [
    showClock,
    setShowClock
  ] = React.useState(true);
  
  return (
    <>
      {showClock && <Clock />}
      <button
        className="clock-toggle"
        onClick={() => setShowClock(!showClock)}
      >
        Toggle clock
      </button>
    </>
  );
}

export default App;