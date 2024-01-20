import React from 'react';

function App() {
  const [hasAgreed, setHasAgreed] = React.useState();

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <fieldset>
          <legend>
            Do you agree?
          </legend>
          
          <input
            type="radio"
            name="agreed-to-terms"
            id="agree-yes"
            value="yes"
            checked={hasAgreed === "yes"}
            onChange={event => {
              setHasAgreed(event.target.value)
            }}
          />
          <label htmlFor="agree-yes">
            Yes
          </label>
          <br />
          
          <input
            type="radio"
            name="agreed-to-terms"
            id="agree-no"
            value="no"
            checked={hasAgreed === "no"}
            onChange={event => {
              setHasAgreed(event.target.value)
            }}
          />
          <label htmlFor="agree-no">
            No
          </label>
        </fieldset>
      </form>
      
      <p>
        <strong>Has agreed:</strong>
        {hasAgreed || "undefined"}
      </p>
    </>
  );
}

export default App;