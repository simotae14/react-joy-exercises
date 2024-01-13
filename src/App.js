import SearchForm from './SearchForm';

function App() {
  // This function is a placeholder.
  function runSearch(searchTerm) {
    window.alert(`Searched for: ${searchTerm}`);
  }
  
  return (
    <SearchForm runSearch={runSearch} />
  );
}

export default App;