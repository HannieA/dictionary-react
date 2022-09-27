import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileAudio } from "@fortawesome/free-regular-svg-icons";

import "./Phonetics.css";

export default function Phonetics(props) {
  // console.log(usPhonetics);
  // const usPhonetics = props.phonetics.filter((item) =>
  //   item.audio.includes("us.mp3")
  // );

  return (
    <div className="Phonetics">
      <p>
        {" "}
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          {/* <FontAwesomeIcon icon={faFileAudio} /> */} Listen
        </a>
        <span className="text">{props.phonetics.text}</span>
      </p>
    </div>
  );
}
