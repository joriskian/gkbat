import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function electricite() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - electricité</title>
        <meta name="description" content="Electricity in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className={styles.main}>
        <h1>electricite</h1>
        <p>En developpement....</p>
      </div>
    </div>
  );
}

export default electricite;
