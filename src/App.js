import React from 'react';

function App() {
  const [invitees, setInvitees] = React.useState([
    'J. Jonah Jameson',
    'Mary Jane',
    'Aunt May',
  ]);

  // NOTE: This form is incomplete. It should have:
  // • A <label> for each input
  // • A <form> tag, with submission behaviour
  //
  // I'm omitting them here because they're not
  // relevant to the problem at hand. Please don't
  // use this markup as a template for anything real 😅

  return (
    <>
      <h1>Invitees</h1>
      <ul>
        {invitees.map((item, index) => (
          <li key={index}>
            <input
              // the `defaultValue` attribute
              // allows us to initialize the input
              // to a particular value, without
              // binding the input to it. This
              // will produce an *uncontrolled*
              // input.
              defaultValue={invitees[index]}
            />
            <button
              onClick={() => {
                const nextInvitees = [...invitees];
                nextInvitees.splice(index, 1);
                
                setInvitees(nextInvitees);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;