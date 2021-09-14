import React from "react";
import VerbsData from "../data/verbs.json";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { normalizeRepeatedSlashes } from "next/dist/shared/lib/utils";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  cardRoot: {
    padding: 5,
    width: 400,
  },
  tableRoot: {
    width: "100%",
    // border: "1px solid black",
  },
  groupGrid: {
    display: "grid",
    gridAutoFlow: "row",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: 1,
    // border: "1px solid black",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
});

function VerbsList() {
  var [etVerbs, setEtVerbs] = React.useState([]);
  var [ovatVerbs, setOvatVerbs] = React.useState([]);
  var [atVerbs, setAtVerbs] = React.useState([]);
  var [irregularVerbs, setIrregularVerbs] = React.useState([]);

  React.useEffect(() => {
    let etGroup = [];
    let ovatGroup = [];
    let atGroup = [];
    let irregularGroup = [];

    VerbsData.forEach((verb) => {
      if (verb.group === "et") etGroup.push(verb);
      if (verb.group === "ovat") ovatGroup.push(verb);
      if (verb.group === "at") atGroup.push(verb);
      if (verb.group === "irregular") irregularGroup.push(verb);
    });

    setEtVerbs(etGroup);
    setOvatVerbs(ovatGroup);
    setAtVerbs(atGroup);
    setIrregularVerbs(irregularGroup);
  }, []);
  const classes = useStyles();

  let drawVerbBox = (verb, index) => {
    return (
      <Card key={index}>
        <CardContent>
          <Typography variant="h4">{verb.infinitiv}</Typography>
          <Typography color="textSecondary">{verb.verb}</Typography>
          <table className={classes.tableRoot}>
            <tr>
              <td>
                <Typography variant="subtitle1">Já {verb.i}</Typography>
              </td>
              <td>
                <Typography variant="subtitle1">Vy {verb.youFormal}</Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="subtitle1">My {verb.we}</Typography>
              </td>
              <td>
                <Typography variant="subtitle1">On/Ona {verb.heShe}</Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="subtitle1">Ty {verb.you}</Typography>
              </td>
              <td>
                <Typography variant="subtitle1">Oni {verb.they}</Typography>
              </td>
            </tr>
          </table>
        </CardContent>
      </Card>
    );
  };

  return (
    <div>
      <Typography variant="h4" align="center">
        Group ET,ĚT,IT
      </Typography>
      <div className={classes.groupGrid}>
        {Array.from(etVerbs, (e, i) => {
          return <div className={classes.cardRoot}>{drawVerbBox(e, i)}</div>;
        })}
      </div>
      <Typography variant="h4" align="center">
        Group OVAT
      </Typography>
      <div className={classes.groupGrid}>
        {Array.from(ovatVerbs, (e, i) => {
          return <div className={classes.cardRoot}>{drawVerbBox(e, i)}</div>;
        })}
      </div>
      <Typography variant="h4" align="center">
        Group AT
      </Typography>
      <div className={classes.groupGrid}>
        {Array.from(atVerbs, (e, i) => {
          return <div className={classes.cardRoot}>{drawVerbBox(e, i)}</div>;
        })}
      </div>
      <Typography variant="h4" align="center">
        Irregulars
      </Typography>
      <div className={classes.groupGrid}>
        {Array.from(irregularVerbs, (e, i) => {
          return <div className={classes.cardRoot}>{drawVerbBox(e, i)}</div>;
        })}
      </div>
    </div>
  );
}

export default VerbsList;
