import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [value, setValue] = useState("");

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }
  function showResponse(response) {
    console.log("my Logs");
    console.log(response.data[0]);
  }

  return (
    <form onSubmit={search}>
      <input type="search" onChange={handleValue} />
    </form>
  );
}
