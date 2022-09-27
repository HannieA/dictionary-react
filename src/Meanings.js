import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            {" "}
            <p className="definition"> {definitions.definition}</p>
            <p className="example">{definitions.example}</p>
          </div>
        );
      })}{" "}
      {/* <span className="synonyms">
        <Synonyms synonyms={props.meanings.definitions[0].synonyms} />
      </span> */}
    </div>
  );
}
