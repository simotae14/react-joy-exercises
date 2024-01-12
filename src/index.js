import React from 'react';
import { createRoot } from 'react-dom/client';

function FriendlyGreeting({ name }) {
  return (
    <p
      style={{
        fontSize: '1.25rem',
        textAlign: 'center',
        color: 'sienna',
      }}
    >
      Greetings, {name}!
    </p>
  );
}

// The video was filmed using React 17, and so
// this playground has been updated for React 18.
const root = createRoot(document.querySelector('#root'));

root.render(
  <div>
    <FriendlyGreeting name="Josh" />
    <FriendlyGreeting name="Anita" />
    <FriendlyGreeting name="Rahul" />
  </div>
);