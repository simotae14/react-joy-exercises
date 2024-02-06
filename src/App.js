/*
Local Storage cheatsheet:

// To save an item:
window.localStorage.setItem('is-dark-mode', true);

// To retrieve the value:
JSON.parse(window.localStorage.getItem('is-dark-mode'));
*/

import React from 'react';

import Toggle from './Toggle';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Retrieve the value:
    const storedValue = JSON.parse(window.localStorage.getItem('is-dark-mode'));
    return storedValue || false;
  });

  React.useEffect(() => {
    window.localStorage.setItem('is-dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className="wrapper"
      style={{
        // NOTE: This is a just-for-fun mini demo, not a
        // full-featured Dark Mode implementation!
        '--color-bg': isDarkMode ? 'black' : 'white',
        '--color-text': isDarkMode ? 'white' : 'black',
      }}
    >
      <Toggle
        label="Dark Mode"
        checked={isDarkMode}
        handleToggle={setIsDarkMode}
      />
    </div>
  );
}

export default App;