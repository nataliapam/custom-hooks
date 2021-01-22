import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  let isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ ...state, loading: true });
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) =>
          //  setTimeout(() => {
          {
            if (isMounted) {
              setState({ data: data, loading: false, error: null });
            }
          }
        //, 3000)
      )
      .catch(() => setState({ data: null, loading: false, error: "Error" }));
  }, [url]);
  return state;
};
