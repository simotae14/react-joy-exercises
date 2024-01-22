import React from 'react';

const initialToppings = {
  anchovies: false,
  chicken: false,
  tomatoes: false,
}

function App() {
  const [
    pizzaToppings,
    setPizzaToppings
  ] = React.useState(initialToppings);

  // Get a list of all toppings.
  // ['anchovies', 'chicken', 'tomato'];
  const toppingsList = Object.keys(initialToppings);
  
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <fieldset>
          <legend>
            Select toppings:
          </legend>
          
          {/*
            Iterate over those toppings, and
            create a checkbox for each one:
          */}
          {toppingsList.map(option => (
            <div key={option}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={pizzaToppings[option] === true}
                onChange={event => {
                  setPizzaToppings({
                    ...pizzaToppings,
                    [option]: event.target.checked,
                  })
                }}
              />
              <label htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </fieldset>
      </form>
      <p>
        <strong>Stored state:</strong>
      </p>
      <p className="output">
        {JSON.stringify(pizzaToppings, null, 2)}
      </p>
    </>
  );
}

export default App;