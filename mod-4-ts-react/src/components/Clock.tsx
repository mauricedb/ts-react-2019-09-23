import React, { useState, useEffect, FunctionComponent } from "react";

type Props = {
  interval?: number;
  children?: never;
};

const Clock: FunctionComponent<Props> = props => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, props.interval);

    return () => clearInterval(handle);
  }, [props.interval]);

  // return null
  // return ""
  return <div>The current time is: {time && time.toLocaleTimeString()}</div>;
};

export default Clock;
