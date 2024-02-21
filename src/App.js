import React from 'react';

import useIsOnscreen from './hooks/use-is-onscreen.js';

function App() {
  const [isOnscreenRed, elementRedRef] = useIsOnscreen();
  const [isOnscreenPurple, elementPurpleRef] = useIsOnscreen();
  
  return (
    <>
      <header>
        Red box visible: {isOnscreenRed ? 'YES' : 'NO'}<br />
        Purple box visible: {isOnscreenPurple ? 'YES' : 'NO'}
      </header>
      <div className="wrapper">
        <div ref={elementRedRef} className="red box" />
        <div ref={elementPurpleRef} className="purple box" />
      </div>
    </>
  );
}

export default App;