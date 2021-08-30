import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

export default function Template(props) {
  return (
    <div className={styles.mainContainer}>
      {/* <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit">
            
          </Button>
        </Toolbar>
      </AppBar> */}
      <div className={styles.menu}>
        <div className={styles.menuButton}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
        <Link href="/" passHref>
          <Typography variant="h6">Czech that!</Typography>
        </Link>
      </div>
      <div>{props.children}</div>
      <footer className={styles.footer}>
        <div>
          <div>Powered by Immigrants</div>
          <div>
            <a href="https://github.com/eduardofleck/czechthat">
              Github project
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
