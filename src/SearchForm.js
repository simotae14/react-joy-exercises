import React from 'react';

function SearchForm({ runSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  return (
    <div className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            runSearch(searchTerm);
          }
        }}
      />
      <button onClick={() => runSearch(searchTerm)}>
        Search!
      </button>
    </div>
  );
}

export default SearchForm;