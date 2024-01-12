import React from 'react';
import { createRoot } from 'react-dom/client';

const element = (
  <div children="As an attribute">
    Between the brackets
  </div>
);

const root = createRoot(
  document.querySelector('#root')
);
root.render(element);