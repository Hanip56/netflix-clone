import React, { useEffect, useState } from "react";

const useHttp = (url, dependencies = []) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
    };
    fetchData();
  }, dependencies);

  return { data };
};

export default useHttp;
