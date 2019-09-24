import React from "react";

type State<T> = {
  loading: boolean;
  data: T[];
};
const useFetch = <T extends any>(url: string) => {
  const [state, setState] = React.useState<State<T>>({
    loading: true,
    data: []
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const rsp = await fetch(url);
      const data = await rsp.json();
      setState({ data, loading: false });
    };
    fetchData();
  }, [url]);

  return state;
};

export default useFetch;
