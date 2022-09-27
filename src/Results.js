import React from "react";
import "./Results.css";

import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.results.phonetics);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <section>
                <Meanings meanings={meaning} />
              </section>{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
