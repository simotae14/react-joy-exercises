import React from 'react';

function AddNewItemForm({
  handleAddItem,
}) {
  const [newItem, setNewItem] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem(newItem);
    setNewItem('');
  }
  return (
    <div className="new-list-item-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-list-form-input">
          New item:
        </label>
        
        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;