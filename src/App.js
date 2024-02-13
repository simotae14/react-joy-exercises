import React from 'react';

import Clock from './Clock'

function App() {
  const [showClock, setShowClock] = React.useState(true);
  
  return (
    <>
      <button
        className="clock-toggle"
        onClick={() => setShowClock(!showClock)}
      >
        {showClock ? 'Clock ON' : 'Clock OFF'}
      </button>
      
      {showClock && <Clock />}
    </>
  );
}

export default App;