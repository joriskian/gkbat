import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css';

function domotique() {
  return (
    <div>
      <Head>
        <title>GK-BAT - Domotique</title>
        <meta name="description" content="Climatisation in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1>domotique</h1>
      </main>
    </div>
  );
}

export default domotique;
