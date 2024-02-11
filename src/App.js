import React from 'react';

function MouseCoords() {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="wrapper">
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default MouseCoords;