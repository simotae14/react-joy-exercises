import React from 'react';

import Button from './Button';

function App() {
  const [hasAgreed, setHasAgreed] = React.useState(false);
  
  return (
    <div className="box">
      <p>
        Are you sure you want to continue?
      </p>
      <label htmlFor="confirm-checkbox">
        <span className="required">*</span>
        <input
          id="confirm-checkbox"
          type="checkbox"
          value={hasAgreed}
          onChange={() => setHasAgreed(!hasAgreed)}
        />
        <span>
          I agree with <a href="/terms">the terms</a>.
        </span>
      </label>
      <div className="actions">
        <Button
          variant="secondary"
          isEnabled={true}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          isEnabled={hasAgreed}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default App;