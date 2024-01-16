import React from 'react';

import styles from './Button.module.css';

function Button({ variant, isEnabled, children }) {
  return (
    <button
      className={`${styles.wrapper} ${styles[variant]}`}
      disabled={!isEnabled}
    >
      {children}
    </button>
  )
}

export default Button;