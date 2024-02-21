import React from 'react';
import format from 'date-fns/format';

function Clock() {
  const time = useTime();
  
  return (
    <p className="clock">
      {format(time, 'hh:mm:ss a')}
    </p>
  );
}

function useTime() {
  const [time, setTime] = React.useState(
    new Date()
  );
  
  React.useEffect(() => {
    // Effect logic
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      // Cleanup logic
      window.clearInterval(intervalId);
    };
  }, []);
  
  return time;
}

export default Clock;