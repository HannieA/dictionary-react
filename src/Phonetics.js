import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  let audioItem = "";
  let textItem = "";

  if (props.phonetics.length > 0) {
    audioItem = props.phonetics.find((item) => item.audio).audio;
    textItem = props.phonetics.find((item) => item.text).text;
  }

  if (audioItem !== "") {
    return (
      <div className="Phonetics">
        <p>
          {" "}
          <a href={audioItem} target="_blank" rel="noreferrer">
            Listen
          </a>
          <span className="text">{textItem}</span>
        </p>
      </div>
    );
  } else {
    return <div className="Phonetics"></div>;
  }
}
