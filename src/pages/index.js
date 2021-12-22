import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EverChess</title>
        <meta name="description" content="Coding challenge from Everlaw" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Now do something!
        </h1>
      </main>

      <footer>
        Jiaqi's rendition of<a href="https://www.everlaw.com/">Everlaw</a>coding challenge
      </footer>
    </div>
  )
}
