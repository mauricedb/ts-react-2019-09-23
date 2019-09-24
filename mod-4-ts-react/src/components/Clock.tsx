import React, { useState, useEffect, FunctionComponent } from "react";

const Clock: FunctionComponent<any> = ({ interval = 1000 }) => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

  // return null
  // return ""
  return <div>The current time is: {time && time.toLocaleTimeString()}</div>;
};

export default React.memo(Clock);
