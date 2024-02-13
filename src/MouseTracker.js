import React from 'react';

function MouseTracker() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [isEnabled, setIsEnabled] = React.useState(true);

  React.useEffect(() => {
    if (isEnabled) {
      function handleMouseMove(event) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isEnabled]);

  function toggleMouseTracking() {
    setIsEnabled(!isEnabled);
  }

  return (
    <>
      <button onClick={toggleMouseTracking}>
        Mouse Tracking: {isEnabled ? 'On' : 'Off'}
      </button>
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </>
  );
}

export default MouseTracker;