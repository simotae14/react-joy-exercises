import React from 'react';

function App() {
  const [optIn, setOptIn] = React.useState(false);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="checkbox"
          id="opt-in-checkbox"
          checked={optIn}
          onChange={event => {
            setOptIn(event.target.checked);
          }}
        />
        <label htmlFor="opt-in-checkbox">
          <strong>Yes,</strong> I would like to join the newsletter.
        </label>
      </form>
      <p>
        <strong>Opt in:</strong> {optIn.toString()}
      </p>
    </>
  );
}

export default App;