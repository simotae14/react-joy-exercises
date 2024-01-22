import React from 'react';

function App() {
  const [color, setColor] = React.useState('#FF0000');
  
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="color-picker">
          Select a color:
        </label>
        <input
          type="color"
          id="color-picker"
          value={color}
          onChange={event => {
            setColor(event.target.value);
          }}
        />
      </form>
      
      <p>
        <strong>Current value:</strong>
        {color}
      </p>
    </>
  );
}

export default App;