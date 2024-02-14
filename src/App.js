import React from 'react';

import VisuallyHidden from './VisuallyHidden';

function UselessMachine() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    // ignore renders that happen because the
    // checkbox is flipped on. We only want to
    // respond when it's flipped *off*.
    if (isOn) {
      return;
    }

    // Flip the checkbox back after 500ms
    const timeoutId = window.setTimeout(() => {
      setIsOn(true);
    }, 500);

    // cleanup function
    return () => {
      // unless the 'isOn' property changes
      // before the time has elapsed, OR the
      // component happens to unmount
      window.clearTimeout(timeoutId);
    };
  }, [isOn]);
  
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={event => {
          setIsOn(event.target.checked);
        }}
      />
      <VisuallyHidden>
        <label htmlFor={id}>
          Toggle checkbox
        </label>
      </VisuallyHidden>
    </>
  );
}

export default UselessMachine;