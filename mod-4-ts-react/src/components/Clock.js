import React, { useState, useEffect } from "react";

const Clock = ({ interval = 1000 }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

  return <div>The current time is: {time && time.toLocaleTimeString()}</div>;
};

export default React.memo(Clock);
