import React, { useEffect, useState } from "react";

const App = () => {
  const [query, setquery] = useState("");
  const [data, setdata] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/posts/search?q=${query}`);
    const data = await res.json();
    setdata(data?.posts);
    console.log(data.posts);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className=" flex flex-col items-center m-4">
      <h1>Search bar with debouncing</h1>
      <input
        className="px-8 py-1 border m-4"
        type="text"
        placeholder="Search item"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
      />
      <div>
        <h1>posts</h1>
        {showResult && (
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {data.map((item) => (
              <div key={item.id} className="w-70 p-4 flex flex-col gap-5">
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
