import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }
  function showResponse(response) {
    setResult(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="mt-5 ml-5">
        <h1>What word are you looking for?</h1>
        <input type="search" onChange={handleValue} />
        <p className="hint">sunset, picture, glass, etc</p>
      </form>
      <Results results={result} />
    </div>
  );
}
