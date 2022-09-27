import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState("");

  function showResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexel(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(showResponse);

    let pexelUrl = `https://api.pexels.com/v1/search?query=${value}&per_page=6`;
    let pexelKey = "563492ad6f91700001000001beaf3ef208ec42f6be971b2544ea2e6a";
    axios
      .get(pexelUrl, {
        headers: { Authorization: `Bearer ${pexelKey}` },
      })
      .then(handlePexel);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <h1>What word are you looking for?</h1>
        <input type="search" onChange={handleValue} />
        <p className="hint">sunset, picture, glass, etc</p>
      </form>
      <Results results={result} />
      <Photos photos={photos} />
    </div>
  );
}
