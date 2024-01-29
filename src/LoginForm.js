import React from 'react';

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Pluck this instance's unique ID from React
  const id = React.useId();

  // Create element IDs using this unique ID
  const usernameId = `${id}-username`;
  const passwordId = `${id}-password`;
  
  return (
    <form className="login-form">
      <div>
        {/* Apply these IDs to the label and input */}
        <label htmlFor={usernameId}>
          Username:
        </label>
        <input
          type="text"
          id={usernameId}
          value={username}
          onChange={event => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor={passwordId}>
          Password:
        </label>
        <input
          type="password"
          id={passwordId}
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button>
        Submit
      </button>
    </form>
  );
}

export default LoginForm;