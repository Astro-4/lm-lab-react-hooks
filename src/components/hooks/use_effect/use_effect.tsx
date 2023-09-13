// make an api call using
import { useEffect, useState } from "react";

export const APICall = () => {
  // Your code here!
  const [data, setData] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchToDO = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const result = await data.json();
      return result;
    };

    // call the function
    fetchToDO()
      // make sure to catch any error
      .catch(console.error);
  }, [setData]);
  return (
    <>
      <h2>useEffect</h2>
      <p>{data}</p>
    </>
  );
};
