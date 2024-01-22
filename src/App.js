import React from 'react';

function App() {
  const [age, setAge] = React.useState('0-18');

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="age-select">
          How old are you?
        </label>
        
        <select
          id="age-select"
          value={age}
          onChange={event => {
            setAge(event.target.value)
          }}
        >
          <option value="0-18">
            18 and under
          </option>
          <option value="19-39">
            19 to 39
          </option>
          <option value="40-64">
            40 to 64
          </option>
          <option value="65-infinity">
            65 and over
          </option>
        </select>
      </form>
      
      <p>
        <strong>Selected value:</strong>
        {age}
      </p>
    </>
  );
}

export default App;