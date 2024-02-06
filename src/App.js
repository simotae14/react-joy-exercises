import React from 'react';

import Counter from './Counter'

function App() {
  const [name, setName] = React.useState('Yuka');
  
  return (
    <>
      <Counter name={name}/>
    </>
  );
}

export default App;