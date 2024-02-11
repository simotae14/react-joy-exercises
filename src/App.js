import React from 'react';

function WindowSize() {
  const [
    windowDimensions,
    setWindowDimensions,
  ] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions({
        width:window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleWindowResize);
  }, []);
  
  return (
    <div className="wrapper">
      <p>
        {windowDimensions.width} / {windowDimensions.height}
      </p>
    </div>
  );
}

export default WindowSize;