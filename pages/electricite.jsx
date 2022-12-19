import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css';
import Footer from './components/footer';

function electricite() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - electricité</title>
        <meta name="description" content="Electricity in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1>electricite</h1>
      </main>
      <Footer />
    </div>
  );
}

export default electricite;
