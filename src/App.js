import React from 'react';

import useIsOnscreen from './hooks/use-is-onscreen.js';

function App() {
  const [isOnscreen, elementRef] = useIsOnscreen();
  
  return (
    <>
      <header>
        Red box visible: {isOnscreen ? 'YES' : 'NO'}
      </header>
      <div className="wrapper">
        <div ref={elementRef} className="red box" />
      </div>
    </>
  );
}

export default App;