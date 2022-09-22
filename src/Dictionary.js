import React, { useState } from "react";

export default function Dictionary() {
  const [value, setValue] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`${value}`);
  }

  function handleValue(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={search}>
      <input type="search" onChange={handleValue} />
    </form>
  );
}
