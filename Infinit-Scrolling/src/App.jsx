import React, { useEffect, useState } from "react";

const App = () => {
  const [item, setItem] = useState([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pages}`,
    );

    const data = await response.json();
    setItem({ ...item, data });
    console.log(item);
  };

  useEffect(() => {
    fetchData();
  }, [pages]);
  return (
    <div>
      <h1>Infinite Scrolling</h1>

      
    </div>
  );
};

export default App;
