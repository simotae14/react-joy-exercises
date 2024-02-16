import React from 'react';

function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <div className="timer">
      <h1>Seconds since load:</h1>
      <p>{count}</p>
    </div>
  );
}

export default Timer;