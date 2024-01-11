import React from 'react';
import { createRoot } from 'react-dom/client';

const shoppingList = ['apple', 'banana', 'carrot'];

// This code...
const element = (
  <div>
    Items left to purchase: {shoppingList.length}
  </div>
);

// ...is equivalent to this code:
const compiledElement = React.createElement(
  'div',
  {},
  'Items left to purchase: ',
  shoppingList.length
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);