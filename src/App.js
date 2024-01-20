import React from 'react';

function App() {
  const [comment, setComment] = React.useState('');
  
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="comment-field">
          Share your experiences:
        </label>
        <textarea
          id="comment-field"
          value={comment}
          onChange={event => {
            setComment(
              event.target.value
            );
          }}
        />
      </form>
      
      <p>
        <strong>Current value:</strong>
        {comment || '(empty)'}
      </p>
    </>
  );
}

export default App;