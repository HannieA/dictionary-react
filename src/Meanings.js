import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            {" "}
            <p> {definitions.definition}</p>
            <p>
              <em> Example: {definitions.example}</em>{" "}
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meanings.definitions[0].synonyms} />
    </div>
  );
}
