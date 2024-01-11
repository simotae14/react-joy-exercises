import React from 'react';
import { createRoot } from 'react-dom/client';

const element = (
  <video
    src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    autoPlay={true}
  />
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);