import React from 'react';

import { COUNTRIES } from './data';

const countryNames = Object.entries(COUNTRIES);

function App() {
  const [
    country,
    setCountry,
  ] = React.useState('');

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">
          Country:
        </label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={event => {
            setCountry(event.target.value)
          }}
          required
        >
          <option value="">- Select Country -</option>
          <optgroup label="Countries">
          {
            countryNames.map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))
          }
          </optgroup>
        </select>
      </fieldset>

      <p className="country-display">
        Selected country: {COUNTRIES[country]}
      </p>

      <button>Submit</button>
    </form>
  );
}

export default App;