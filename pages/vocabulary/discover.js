import React from "react";
import Chip from "@material-ui/core/Chip";
import metadataPictures from "../../data/metadataPictures.json";
import styles from "../../styles/Home.module.css";

function Discover() {
  var [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    let categoriesList = [];

    metadataPictures.forEach((pic) => {
      pic.categories.forEach((cat) => {
        var categorieInList = categoriesList.some((value) => {
          return value.categorie == cat;
        });

        if (!categorieInList) {
          categoriesList.push({ categorie: cat, selected: false });
        }
      });
    });

    setCategories(categoriesList);
  }, []);

  const handleClick = (e) => {
    console.info("You clicked the Chip ");
    console.info(e.target.dataset["categorie"]);
  };

  return (
    <div className={styles.categoriesOuterGrid}>
      <div></div>
      <div className={styles.categoriesGrid}>
        {Array.from(categories, (c, i) => {
          return (
            <Chip
              key={i}
              label={"#" + c.categorie}
              data-categorie={c.categorie}
              className={styles.categorieChip}
              onClick={handleClick}
            />
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Discover;
