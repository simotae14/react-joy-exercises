import React from 'react';

function App() {
  const [volume, setVolume] = React.useState(50);
  
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="volume-slider">
          Audio volume:
        </label>
        <input
          type="range"
          id="volume-slider"
          min={0}
          max={100}
          value={volume}
          onChange={event => {
            setVolume(event.target.value);
          }}
        />
      </form>
      
      <p>
        <strong>Current value:</strong>
        {volume}
      </p>
    </>
  );
}

export default App;