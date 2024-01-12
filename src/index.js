import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.querySelector('#root')
);

function Button({ children, color }) {
  return (
    <button
      style={{
        border: '2px solid',
        color:  color,
        borderColor: color,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  )
}

root.render(
  <div>
    <Button color="red">Cancel</Button>
    <Button color="black">Confirm</Button>
  </div>
);