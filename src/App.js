import React from 'react';

import WindowSize from './WindowSize';

function App() {
  const [
    isTrackingWindowSize,
    setIsTrackingWindowSize,
  ] = React.useState(true);
  
  function toggleWindowSize() {
    setIsTrackingWindowSize(!isTrackingWindowSize);
  }
  
  return (
    <div className="wrapper">
      <button onClick={toggleWindowSize}>
        Toggle Window Size
      </button>
      {isTrackingWindowSize && <WindowSize />}
    </div>
  );
}

export default App;