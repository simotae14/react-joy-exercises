import React from 'react';

try {
  React.useId();
} catch (err) {
  // Swallowing an error that occurs because
  // of the warning shown in the console.
}