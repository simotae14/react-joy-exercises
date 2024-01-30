import React from 'react';

import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleLogin(event) {
    // NOTE: In a real application, we'd perform a
    // network request here, to validate the login.
    // We'll see how to do this later in this module.
    event.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <>      
      {isLoggedIn ? (
        <>
          <p>You're already logged in!</p>
          <button
            onClick={(event) => {
              setIsLoggedIn(false);
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <LoginForm
          handleLogin={handleLogin}
        />
      )}
    </>
  );
}

export default App;