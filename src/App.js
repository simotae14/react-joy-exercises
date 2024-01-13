import React from 'react';

function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState('cats!');
  
  return (
    <>
      <form>
        <label htmlFor="search-input">
          Search:
        </label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>

      <p>
        Search term: {searchTerm}
      </p>

      <button
        onClick={() => setSearchTerm(Math.random())}
      >
        Click me
      </button>
    </>
  );
}

export default SearchForm;