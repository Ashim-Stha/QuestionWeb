import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

const Home = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchresults");
  };
  return (
    <>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim
        nemo error ipsa dignissimos vel saepe impedit eveniet? Iusto sit placeat
        et, suscipit quaerat quo soluta sed obcaecati ipsum officiis molestiae
        eaque.
      </p>
      <body className="searchForm">
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
          {/* <span class="search-icon" onClick={handleSubmit}>
          &#x1F50D;
        </span> */}
        </form>
      </body>
    </>
  );
};

export default Home;
