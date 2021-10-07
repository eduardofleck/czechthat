import React from "react";
import Chip from "@material-ui/core/Chip";
import metadataPictures from "../../data/metadataPictures.json";
import styles from "../../styles/Home.module.css";
import DoneIcon from "@material-ui/icons/Done";
import Image from "next/image";

function Discover() {
  var [categories, setCategories] = React.useState([]);
  var [pictures, setPictures] = React.useState([]);

  React.useEffect(() => {
    let categoriesList = [];

    metadataPictures.forEach((pic) => {
      pic.categories.forEach((cat) => {
        var categorieInList = categoriesList.some((value) => {
          return value.categorie == cat;
        });

        if (!categorieInList) {
          categoriesList.push({
            categorie: cat,
            selected: true,
            color: "primary",
          });
        }
      });
    });
    setPictures(metadataPictures);
    setCategories(categoriesList);
  }, []);

  const handleClick = (e) => {
    var categoriesCopy = categories;

    categoriesCopy.forEach((cat) => {
      if (cat.categorie == e) {
        cat.selected = !cat.selected;
        cat.selected == true
          ? (cat.color = "primary")
          : (cat.color = "secondary");
      }
    });

    setCategories(categoriesCopy);

    let selectedCategories = [];
    categoriesCopy.forEach((cat) => {
      if (cat.selected == true) {
        selectedCategories.push(cat.categorie);
      }
    });

    let picturesList = [];
    metadataPictures.forEach((pic) => {
      if (pic.categories.some((r) => selectedCategories.indexOf(r) >= 0)) {
        picturesList.push(pic);
      }
    });
    setPictures(picturesList);
  };

  const createPicture = (picture) => {
    return (
      <Image
        src={"/images/" + picture.picture}
        height="200"
        width="100"
        alt={picture.info}
      />
    );
  };
  const createChip = (categorie) => {
    if (categorie.selected == true) {
      return (
        <div>
          <input
            type="checkbox"
            key={"categorie_" + categorie.categorie}
            name={categorie.categorie}
            onChange={() => handleClick(categorie.categorie)}
            checked
          />
          {categorie.categorie}
        </div>
      );
    } else {
      return (
        <div key={"categorie_" + categorie.categorie}>
          <input
            type="checkbox"
            name={categorie.categorie}
            onChange={() => handleClick(categorie.categorie)}
          />
          {categorie.categorie}
        </div>
      );
    }
  };

  return (
    <div className={styles.categoriesOuterGrid}>
      <div></div>
      <div className={styles.categoriesGrid}>
        <div></div>
        <div>{(categories || []).map((cat) => createChip(cat))}</div>
      </div>
      <div>{(pictures || []).map((pic) => createPicture(pic))}</div>
    </div>
  );
}

export default Discover;
