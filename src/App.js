import React from 'react';

// The source of truth!
const OPTIONS = [
  {
    label: '18 and under',
    value: '0-18'
  },
  {
    label: '19 to 39',
    value: '19-39'
  },
  {
    label: '40 to 64',
    value: '40-64'
  },
  {
    label: '65 and over',
    value: '65-infinity'
  },
];

function App() {
  // Grab the first option from the array.
  // Set its value into state:
  const [age, setAge] = React.useState(OPTIONS[0].value);

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
          {/*
            Iterate over that array, to create
            the <option> tags dynamically:
          */}
          {OPTIONS.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
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