import React from 'react';
import { X, Search } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function App() {
  const [
    showSearchField,
    setShowSearchField,
  ] = React.useState(false);

  const reactId = React.useId();
  let searchId = showSearchField ? reactId : undefined;
  // if (showSearchField) {
  //   searchId = React.useId();
  // }

  function handleToggleSearch(event) {
    event.preventDefault();
    setShowSearchField(!showSearchField);
  }

  return (
    <>
      <form>
        {showSearchField && <SearchField />}
        <button
          className="search-toggle-button"
          onClick={handleToggleSearch}
        >
          {showSearchField ? <X /> : <Search />}
          <VisuallyHidden>
            Toggle search field
          </VisuallyHidden>
        </button>
      </form>
    </>
  );
}

function SearchField() {
  const searchId = React.useId();
  return (
    <div className="search-field-wrapper">
      <label
        htmlFor={searchId}
      >
        <VisuallyHidden>
          Search
        </VisuallyHidden>
      </label>
      <input
        id={searchId}
        className="search-field"
      />
    </div>
  )
}

export default App;