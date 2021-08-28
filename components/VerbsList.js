import React from "react";

function VerbsList() {
  var [etVerbs, setEtVerbs] = React.useState([
    {
      verb: "To live",
      infinitiv: "Bydlet",
      group: "et",
      i: "bydlím",
      we: "bydlíme",
      you: "bydlíš",
      youFormal: "bydlíte",
      heShe: "bydlí",
      they: "bydlí",
    },
    {
      verb: "Understand",
      infinitiv: "Rozumět",
      group: "et",
      i: "rozumím",
      we: "rozumíme",
      you: "rozumíš",
      youFormal: "rozumíte",
      heShe: "rozumí",
      they: "rozumějí",
    },
    {
      verb: "Understand",
      infinitiv: "Sedět",
      group: "et",
      i: "sedím",
      we: "sedíme",
      you: "sedíš",
      youFormal: "sedíte",
      heShe: "sedí",
      they: "sedí",
    },
  ]);

  let drawVerbBox = (verb, index) => {
    return (
      <div>
        <div>
          <h1>{verb.infinitiv}</h1> <h4>({verb.verb})</h4>
        </div>

        <ul key={index}>
          <li key={"I_" + index}>Já {verb.i}</li>
          <li key={"WE_" + index}>My {verb.we}</li>
          <li key={"YOU_" + index}>Ty {verb.you}</li>
          <li key={"YOU_FORMAL_" + index}>Vy {verb.youFormal}</li>
          <li key={"HE_SHE_" + index}>On/Ona {verb.heShe}</li>
          <li key={"THEY_" + index}>Oni {verb.they}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Group ET,ĚT,IT </h1>
      {Array.from(etVerbs, (e, i) => {
        return drawVerbBox(e, i);
      })}
    </div>
  );
}

export default VerbsList;
