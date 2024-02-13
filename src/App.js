import React from 'react';

import MouseTracker from './MouseTracker';

function App() {
  const [isTrackingMouse, setIsTrackingMouse] = React.useState(true);
  
  function toggleMouseTracking() {
    setIsTrackingMouse(!isTrackingMouse);
  }
  
  return (
    <div className="wrapper">
      <button onClick={toggleMouseTracking}>
        Toggle Mouse Tracking
      </button>
      {isTrackingMouse && <MouseTracker />}
    </div>
  );
}

export default App;