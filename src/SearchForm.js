import React from 'react';

function SearchForm({ searchTerm, setSearchTerm }) {
  
  function runSearch(event) {
    event.preventDefault();
    
    // Actual search stuff omitted from
    // this example.
  }
  
  return (
    <form onSubmit={runSearch}>
      <label
        className="visually-hidden"
        htmlFor="search-input"
      >
        Search term:
      </label>
      <input
        id="search-input"
        className="search-input"
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      />
      <button>
        Search
      </button>
    </form>
  );
}

export default SearchForm;