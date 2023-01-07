import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Test3D from './components/Test3D';

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

      <div className={styles.main}>
        {/* <Test3D /> */}
        <h1 itemScope itemType="https://schema.org/HVACBusiness">
          climatisation
        </h1>
        <div className={styles.artContainer}>
          <p>Site en construction.....</p>
        </div>
      </div>
    </div>
  );
}

export default climatisation;
