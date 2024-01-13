import React from 'react';

const CORRECT_CODE = '123456';

function TwoFactor() {
  const [twoFactorCode, setTwoFactorCode] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const isCorrect = twoFactorCode === CORRECT_CODE;
    window.alert(isCorrect ? 'Correct!' : 'Incorrect');
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="auth-code">
        Enter authorization code:
      </label>
      <div className="row">
        <input
          id="auth-code"
          type="text"
          required={true}
          maxLength={6}
          value={twoFactorCode}
          onChange={(event) => setTwoFactorCode(event.target.value)}
        />
        <button>Validate</button>
      </div>
    </form>
  );
}

export default TwoFactor;