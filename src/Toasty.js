/*

To stop an IntersectionObserver, you can run:
  observer.disconnect();

*/
import React from 'react';

import styles from './Toasty.module.css';

function Toasty() {
  const [isShown, setIsShown] = React.useState(false);

  const wrapperRef = React.useRef();

  React.useEffect(() => {
    console.log('observe')
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);

    // cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  const translateX = isShown ? '0%' : '100%';

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.character}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}

export default Toasty;