import React from 'react';

import AddNewItemForm from './AddNewItemForm';

function App() {
  const [shoppingList, setShoppingList] = React.useState([
    {
      id: 123,
      label: "Avocados"
    },
    {
      id: 456,
      label: "Broccoli"
    },
    {
      id: 145,
      label: "Carrots"
    },
  ]);

  const handleAddItem = (label) => {
    const newItem = {
      label,
      id: Math.random(),
    }

    const nextItems = [...shoppingList, newItem];
    setShoppingList(nextItems);
  } 
  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {
            shoppingList.map(({ id, label }) => (<li key={id}>{label}</li>))
          }
        </ol>
      </div>
      <AddNewItemForm
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;