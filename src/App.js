import React from 'react';

function App() {
  const [name, setName] = React.useState('');
  
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          
          // Do something with `name` here
        }}
      >
        <label htmlFor="name-field">
          Name:
        </label>
        <input
          id="name-field"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
      </form>
      
      <p>
        <strong>Current value:</strong>
        {name || '(empty)'}
      </p>
    </>
  );
}

export default App;