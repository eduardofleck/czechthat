import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Czech that</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Czech that!</h1>

        <div className={styles.grid}>
          <a href="/phrases/generator" className={styles.card}>
            <h2>Phrases Generator</h2>
            <p>Put together words and form phrases!</p>
          </a>

          <a href="/verbs/list" className={styles.card}>
            <h2>Verbs List</h2>
            <p>List of verbs conjugated</p>
          </a>
        </div>
      </main>

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
