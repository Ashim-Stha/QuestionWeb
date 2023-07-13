import React from "react";
import Home from "./Home";

const SearchResults = ({ results }) => {
  return (
    <>
      <Home />
      <ul>
        {results.slice(0, 3).map((result) =>
          result ? (
            <li key={result.id}>
              <img src={result.url}></img>
            </li>
          ) : (
            <p>Not found</p>
          )
        )}
      </ul>
    </>
  );
};

export default SearchResults;
