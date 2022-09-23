import React from "react";

export default function Meanings(props) {
  console.log("My logs");
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div>
            {" "}
            <p>{definitions.definition}</p>
            <p>
              <em>Example: {definitions.example}</em>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
