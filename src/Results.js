import React from "react";
import "./Results.css";

import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    console.log("props.results");
    console.log(props.results);
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <Phonetics phonetics={props.results.phonetics} />
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
  } else return null;
}
