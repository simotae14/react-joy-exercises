import React from 'react';

function App() {
  React.useEffect(() => {
    console.log('Mount check!');
  }, []);
  
  return (
    <>
      Hello World!
    </>
  );
}

export default App;