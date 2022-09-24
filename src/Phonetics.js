import React from "react";

export default function Phonetics(props) {
  const usPhonetics = props.phonetics.filter((item) =>
    item.audio.includes("us.mp3")
  );

  return (
    <div className="Phonetics">
      <p>{usPhonetics[0].text}</p>
      <a href={usPhonetics[0].audio} target="_blank">
        Listen
      </a>
    </div>
  );
}
