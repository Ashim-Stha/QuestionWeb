import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SearchResults from "./components/SearchResults";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      if (!response.ok) throw Error("error");
      const jsonResponse = await response.json();
      setResults(jsonResponse);
      console.log(results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => await fetchApi())();
  }, [results]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home search={search} setSearch={setSearch} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/searchresults"
          element={<SearchResults results={results} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
