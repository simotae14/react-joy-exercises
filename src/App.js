import React from 'react';

function App() {
  const [
    includeFooter,
    setIncludeFooter,
  ] = React.useState(false);

  return (
    <>
      <h1>Some Application</h1>
      <form className="footer-toggle-wrapper">
        <input
          type="checkbox"
          id="footer-toggle"
          checked={includeFooter}
          onChange={(event) => {
            setIncludeFooter(event.target.checked);
          }}
        />
        <label htmlFor="footer-toggle">
          Toggle Footer
        </label>
      </form>
      {includeFooter && <Footer />}
    </>
  );
}

function Footer() {
  const [
    backgroundColor,
    setBackgroundColor,
  ] = React.useState('#232538');

  return (
    <footer style={{ backgroundColor }}>
      <form>
        <label htmlFor="bg-picker">
          Tweak background:
        </label>
        <input
          type="color"
          id="bg-picker"
          value={backgroundColor}
          onChange={(event) => {
            setBackgroundColor(event.target.value);
          }}
        />
      </form>
      <p>
        © Some Application Inc., 1998-present. All
        Rights Reserved.
      </p>
    </footer>
  );
}

export default App;