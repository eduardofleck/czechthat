import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Czech that</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Czech that!</h1>

        <div className={styles.grid}>
          <Link href="/phrases/generator" passHref>
            <div className={styles.card}>
              <h2>Phrases Generator</h2>
              <p>Put together words and form phrases!</p>
            </div>
          </Link>

          <Link href="/verbs/list" passHref>
            <div className={styles.card}>
              <h2>Verbs List</h2>
              <p>List of verbs conjugated</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
