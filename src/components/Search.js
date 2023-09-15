import React from "react";
import "./Search.css";

const Search = ({city}) =>{
  return (
    <>
    <form>
<label for="country">{city}</label>
<button type="submit">Find Weather</button>
  </form>
    </>
  );
}

export default Search;
