import React,{useState} from "react";
import "./Search.css";

const Search = ({city,handleClick}) =>{
  return (
    <>
    <form>
<input type="text" id="input"/>
<button type="button" onClick={handleClick}>Find Weather</button>
  </form>
    </>
  );
}
export default Search;
