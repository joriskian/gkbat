import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT</title>
        <meta name="description" content="Electricity in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <NavBar />

      <main className={styles.main}>
        <h1>GKBAT</h1>
      </main>

      <footer className={styles.footer}>
        <a href="/contact">Contact</a>
      </footer>
    </div>
  );
}
