import React from 'react';

import styles from './Button.module.css';

function Button({ variant, children }) {
  return (
    <button
      className={`${styles.wrapper} ${styles[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button;