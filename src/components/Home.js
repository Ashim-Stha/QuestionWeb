import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchresults");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        autoComplete="on"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Home;
