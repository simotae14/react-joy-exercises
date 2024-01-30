import React from 'react';

import TextInput from './TextInput';

function App() {
  return (
    <>
      <TextInput label="Name" />
      <TextInput
        id="my-email"
        label="Email"
        type="email"
      />
    </>
  );
}

export default App;