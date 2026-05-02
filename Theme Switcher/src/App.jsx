import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { TheamProvider } from "./utils/Theam-Context";

const App = () => {
  return (
    <TheamProvider>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </TheamProvider>
  );
};

export default App;
