import React from 'react';

function App() {
  const [user, setUser] = React.useState({ name: 'Alyssa' });
  const [status, setStatus] = React.useState('ready');
  const [confirmationMessage, setConfirmationMessage] = React.useState();

  if (!user) {
    return <p>{confirmationMessage}</p>;
  }

  return (
    <button
      onClick={() => {
        setUser(null);
        setStatus('initial');
        setConfirmationMessage("You have been logged out.");
      }}
    >
      Log Out
    </button>
  );
}

export default App;