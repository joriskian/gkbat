import React from 'react';
import Head from 'next/head';
import NavBar from './components/NavBar';
import styles from '../styles/Home.module.css';
import Test3D from './components/test3D';
import Footer from './components/footer';

function climatisation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GK-BAT - Climatisation</title>
        <meta
          name="description"
          content="Climatisation à Lille et les environs"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <h1 itemScope itemType="https://schema.org/HVACBusiness">
          climatisation
        </h1>
        <Test3D />
      </main>
      <Footer />
    </div>
  );
}

export default climatisation;
