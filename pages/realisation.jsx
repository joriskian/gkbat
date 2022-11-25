import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css';

export default function realisation() {
  return (
    <div>
      <Head>
        <title>GK-BAT - Nos Réalisations</title>
        <meta name="description" content="Electricity in Lille and around" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1>Nos Réalisations</h1>
      </main>
    </div>
  );
}