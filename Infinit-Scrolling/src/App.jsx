import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [item, setItem] = useState([]);
  const [pages, setPages] = useState(1);
  const loadingRef = useRef(null);
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pages}`,
    );

    const data = await response.json();
    setItem((prv) => [...prv, ...data]);
    console.log(item);
  };

  useEffect(() => {
    fetchData();
  }, [pages]);

  useEffect(() => {
    if (!loadingRef.current) return;
    // new instence of intersection observer

    const Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPages((prv) => prv + 1);
        }
      },
      { threshold: 0 },
    );
    if (loadingRef.current) {
      Observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) Observer.unobserve(loadingRef.current);
    };
  }, []);

  if (!item) return;
  return (
    <div>
      <h1>Infinite Scrolling</h1>

      <div className="card-container">
        {item &&
          item.map((item) => (
            <div key={item.id} className="card">
              <h2 className="card-heading">{item.title}</h2>
              <p className="card-body">{item.body}</p>
            </div>
          ))}
      </div>

      <div ref={loadingRef}>loading....</div>
    </div>
  );
};

export default App;
