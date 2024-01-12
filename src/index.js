import { createRoot } from 'react-dom/client';

const daysUntilSantaReturns = 123;

const element = (
<div>
  <strong>Days until Santa returns:</strong>
  {' '}
  {daysUntilSantaReturns}
</div>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);