import React from "react";

export default function Phonetics(props) {
  props.phonetics.map(function (us, index) {
    console.log("My logs");
    console.log(us.text);

    return (
      <div key={index} className="Phonetics">
        <strong>{us.text}</strong>
      </div>
    );
  });
}
//   const usPhonetics = props.phonetics.filter((item) =>
//     item.audio.includes("us.mp3")
//   );

//   return <div>{usPhonetics}</div>;
