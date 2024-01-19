import React from 'react';
import { createRoot } from 'react-dom/client';

function RandomNumber() {
  const [num, setNum] = React.useState(0);

  return (
    <button onClick={() => setNum(Math.random())}>
      Current number: {num}
    </button>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <>
    <RandomNumber />
  </>
);