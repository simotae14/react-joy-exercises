import ShoppingList from './ShoppingList';

function App() {
  const shoppingList = [];
  const numOfItems = shoppingList.length;

  return (
    <div>
      {numOfItems && (
        <ShoppingList items={shoppingList} />
      )}
    </div>
  );
}

export default App;