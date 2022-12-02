import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css';
import Test3D from './components/test3D';

function climatisation() {
  return (
    <div>
      <Head>
        <title>GK-BAT - Climatisation</title>
        <meta name="description" content="Climatisation in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <h1>climatisation</h1>
        <Test3D />
      </main>
    </div>
  );
}

export default climatisation;
