import React from "react";

function PhrasesGenerator() {
  var [tableHeight, setTableHeight] = React.useState(16);

  var [adverbs, setAverbs] = React.useState([
    "NOVÝ",
    "ČESKÉ",
    "MALÉ",
    "NÁŠ",
    "MŮJ",
    "TEN",
    "ZELENÝ",
    "MOJE",
    "TO",
    "TA",
    "NAŠE",
    "TVŮJ",
    "TVOJE",
    "VELKÉ",
    "MALÁ",
    "DOBRÉ",
  ]);

  var [substantives, setSubstantives] = React.useState([
    "KAFE",
    "DÍTĚ",
    "STUDENT",
    "JÍDLO",
    "KAMARÁDKA",
    "BRATR",
    "MANAŽER",
    "ČAJ",
    "POLÉVKA",
    "MOBIL",
    "KOLEGA",
    "RODINA",
    "KANCELÁŘ",
    "PIVO",
    "PES",
    "AUTO",
  ]);

  var [verbs, setVerbs] = React.useState([
    "PRACUJE",
    "MLUVÍ",
    "ROZUMÍ",
    "NENÍ",
    "SI DÁ",
    "VIDÍ",
    "SE JMENUJE",
    "SE MÁ",
    "VAŘÍ",
    "UKLÍZÍ",
    "SE UČÍ",
    "STOJÍ",
    "JE",
    "BYDLÍ",
    "NENÍ",
    "JEDE",
  ]);

  var [places, setPlaces] = React.useState([
    "DOBŘE",
    "ČESKY",
    "ŠPATNĚ",
    "ANNA",
    "MOC",
    "DOBRÝ,Á,É",
    "ANGLICKY",
    "POMALU",
    "ŠPANĚLSKY",
    "v NEDĚLI",
    "TADY",
    "DOMA",
    "V NUSLÍCH",
    "v PRAZE",
    "Z MEXIKA",
    "v NN",
  ]);

  let GetWord = (arrayOfWords) => {
    var wordNr = Math.round(Math.random() * arrayOfWords.length - 1);

    var word = arrayOfWords.splice(wordNr, 1);
    return word;
  };

  let TableWords = () => {
    return (
      <table>
        {Array.from(Array(tableHeight), (e, i) => {
          return (
            <tr key={i}>
              <td>{GetWord(adverbs)}</td>
              <td>{GetWord(substantives)}</td>
              <td>{GetWord(places)}</td>
            </tr>
          );
        })}
      </table>
    );
  };

  return (
    <div>
      <div>
        <h3>Generate Prhases</h3>
      </div>
      <div>{TableWords()}</div>
    </div>
  );
}

export default PhrasesGenerator;
